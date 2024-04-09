import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../../services/character/rick-and-morty.service';
import { Character } from '../../../models/character';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from '../../../services/character/storage.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit {

  characters: Character[] | any;
  currentPage: number = 1;
  characterToEdit?: Character;
  // countPageInApi:number=this.storageService.countPageInApi

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPage = params['id'] ? +params['id'] : 1;
      this.loadCharacters();
    });
  }

  loadCharacters1(): void {
    this.rickAndMortyService
      .getCharacters(this.currentPage)
      .subscribe((result: any) => {
        console.log(result); // Log the response here
        this.characters = result.results; // Assuming the characters are in `results` property
      });
    console.log(this.currentPage);
  }

  loadCharacters(): void {
    if (this.currentPage < this.storageService.countPageInApi) {
      const res = this.storageService.getCharacterByPage(this.currentPage)
      if (res === undefined) {
        this.rickAndMortyService
          .getCharacters(this.currentPage)
          .subscribe((result: any) => {
            console.log(result, "rickAndMortyService");
            this.characters = result.results
              .filter((item: Character) => !this.storageService.deletedCharactersID.includes(item.id!))
              .map((item: Character) => this.storageService.updatedCharacters.find(i => i.id == item.id) || item);
            this.storageService.countPageInApi = result.info.pages
            console.log("result.info.pages", result.info.pages);
            this.storageService.characters.push({ characterInPage: this.characters, numberPage: this.currentPage })
          })
      }
      else {
        console.log("from res");
        
        this.characters = res
          .filter((item: Character) => !this.storageService.deletedCharactersID.includes(item.id!))
          .map((item: Character) => this.storageService.updatedCharacters.find(i => i.id == item.id) || item);
      }
    }
    else {
      console.log("in list", this.characters);
      this.characters = this.storageService.addCharacters;
    }
  }

  nextPage(): void {
    this.currentPage++;
    this.router.navigate(['/character/page', this.currentPage]);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.router.navigate(['/character/page', this.currentPage]);
    }
  }

  navigateForm(): void {
    this.router.navigate(['/character/add']);
  }
}



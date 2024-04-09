import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../../services/character/rick-and-morty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent implements OnInit{

  currentPage: number = 1;
  locations: Location[] | any;

  constructor(
    private rickAndMortyService : RickAndMortyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPage = params['id'] ? +params['id'] : 1;
      this.loadCharacters();
    });
  }


  loadCharacters(): void {
    this.rickAndMortyService
      .getLocation(this.currentPage)
      .subscribe((result: any) => {
        console.log(result); 
        this.locations = result.results; 
      });
    console.log(this.currentPage);
  }

  nextPage(): void {
    this.currentPage++;
    this.router.navigate(['/location/page', this.currentPage]);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.router.navigate(['/location/page', this.currentPage]);
    }
  }
}

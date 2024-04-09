import { Component, Inject, Input, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../../services/character/rick-and-morty.service';
import { Character } from '../../../models/character';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-characters',
  templateUrl: './show-characters.component.html',
  styleUrl: './show-characters.component.scss'
})
export class ShowCharactersComponent implements OnInit {

  characters: Character[] | any;

  constructor(
    private rickAndMortyService: RickAndMortyService,
    public dialogRef: MatDialogRef<ShowCharactersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.rickAndMortyService.showCharacters(this.data).subscribe(r => this.characters = r);
    console.log(this.data, "in show");

  }



}

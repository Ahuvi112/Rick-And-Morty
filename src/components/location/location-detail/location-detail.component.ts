import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowCharactersComponent } from '../../character/show-characters/show-characters.component';
import { Location } from '../../../models/location'
@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.scss'
})
export class LocationDetailComponent {

  @Input() location: Location | undefined;
  showCharacters: boolean = false;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ShowCharactersComponent, {
      height: '500px',
      width: '800px',
      data: this.location?.residents
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

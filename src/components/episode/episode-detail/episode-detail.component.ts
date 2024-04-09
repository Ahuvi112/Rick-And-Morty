import { Component, Input } from '@angular/core';
import { Episode } from '../../../models/episode';
import { StorageService } from '../../../services/character/storage.service';
import { Character } from '../../../models/character';
import { RickAndMortyEpisodeService } from '../../../services/character/episode/rick-and-morty-episode.service';
import { ShowCharactersComponent } from '../../character/show-characters/show-characters.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.scss'
})
export class EpisodeDetailComponent {

  @Input() episode: Episode | undefined;
  showCharacters: boolean = false;

  constructor(
    private rickAndMortyEpisodeService: RickAndMortyEpisodeService,
    public dialog: MatDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(ShowCharactersComponent, {
      height: '500px',
      width: '800px',
      data: this.episode?.characters
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

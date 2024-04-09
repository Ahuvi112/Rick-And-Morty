import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickAndMortyEpisodeService } from '../../../services/character/episode/rick-and-morty-episode.service';
import { Episode } from '../../../models/episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss'
})
export class EpisodeListComponent implements OnInit {

  currentPage: number = 1;
  episodes: Episode[] | any;

  constructor(
    private rickAndMortyEpisodeService: RickAndMortyEpisodeService,
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
    this.rickAndMortyEpisodeService
      .getEpsido(this.currentPage)
      .subscribe((result: any) => {
        console.log(result); 
        this.episodes = result.results; 
      });
    console.log(this.currentPage);
  }

  nextPage(): void {
    this.currentPage++;
    this.router.navigate(['/episode/page', this.currentPage]);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.router.navigate(['/episode/page', this.currentPage]);
    }
  }

}

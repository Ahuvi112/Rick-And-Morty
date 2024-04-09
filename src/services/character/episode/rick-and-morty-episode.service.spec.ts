import { TestBed } from '@angular/core/testing';

import { RickAndMortyEpisodeService } from './rick-and-morty-episode.service';

describe('RickAndMortyEpisodeService', () => {
  let service: RickAndMortyEpisodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyEpisodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

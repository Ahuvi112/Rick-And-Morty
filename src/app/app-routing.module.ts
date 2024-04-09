import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from '../components/character/character-list/character-list.component'
import { CharacterFormComponent } from '../components/character/character-form/character-form.component'
import { EpisodeListComponent } from '../components/episode/episode-list/episode-list.component';
import { LocationListComponent } from '../components/location/location-list/location-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/page/1' },
  { path: 'character/page/:id', component: CharacterListComponent },
  { path: 'character/add', component: CharacterFormComponent },
  { path: 'character/update/:id', component: CharacterFormComponent },
  { path: 'episode/page/:id', component: EpisodeListComponent },
  { path: 'location/page/:id', component: LocationListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

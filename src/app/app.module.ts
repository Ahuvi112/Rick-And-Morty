import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from '../components/character/character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyService } from '../services/character/rick-and-morty.service';
import { CharacterDetailComponent } from '../components/character/character-detail/character-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterFormComponent } from '../components/character/character-form/character-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { EpisodeListComponent } from '../components/episode/episode-list/episode-list.component';
import { EpisodeDetailComponent } from '../components/episode/episode-detail/episode-detail.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DeleteDialogComponent } from '../components/character/delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ShowCharactersComponent } from '../components/character/show-characters/show-characters.component';
import { LocationListComponent } from '../components/location/location-list/location-list.component';
import { LocationDetailComponent } from '../components/location/location-detail/location-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterFormComponent,
    EpisodeListComponent,
    EpisodeDetailComponent,
    DeleteDialogComponent,
    ShowCharactersComponent,
    LocationListComponent,
    LocationDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatCardModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [RickAndMortyService, { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }

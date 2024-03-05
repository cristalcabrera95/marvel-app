import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';


export const CHARACTERS_ROUTES: Routes = [
    { path: '', component: CharacterComponent },
    { path: 'details', component: CharacterDetailComponent}
]
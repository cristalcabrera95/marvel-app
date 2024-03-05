import { Routes } from '@angular/router';
import { CharacterDetailComponent } from '../characters/character-detail/character-detail.component';
import { CharacterComponent } from '../characters/character/character.component';

export const CARACTERS_ROUTES: Routes = [
    { path: '', component: CharacterComponent },
    { path: 'details', component: CharacterDetailComponent}
]
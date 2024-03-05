import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'caracters', loadChildren:() => import('./components/characters/characters.route').then(m => m.CHARACTERS_ROUTES)},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

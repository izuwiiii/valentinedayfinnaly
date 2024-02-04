import { Routes } from '@angular/router';
import { ValentPageComponent } from './pages/valent-page/valent-page.component';
import { YesPageComponent } from './pages/yes-page/yes-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Valent', pathMatch: 'full'},
    {path: 'Valent', component: ValentPageComponent},
    {path: 'Yes', component: YesPageComponent},
    {path: '**', redirectTo: 'Valent', pathMatch: 'full'}
];

import { Routes } from '@angular/router';
import { ValentPageComponent } from './pages/valent-page/valent-page.component';
import { YesPageComponent } from './pages/yes-page/yes-page.component';

export const routes: Routes = [
    {path: 'valent', component: ValentPageComponent},
    {path: 'yes', component: YesPageComponent},
    {path: '', redirectTo: 'valent', pathMatch: 'full'},
    {path: '**', redirectTo: 'valent', pathMatch: 'full'}
];

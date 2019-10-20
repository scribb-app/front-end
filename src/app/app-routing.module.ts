import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'lists', loadChildren: './features/lists/lists.module#ListsPageModule' },
  { path: 'notes', loadChildren: './features/notes/notes.module#NotesPageModule' },
  { path: 'notes/:action', loadChildren: './features/notes/notes.module#NotesPageModule' },
  { path: 'sign-in', loadChildren: './auth/sign-in/sign-in.module#SignInPageModule' },
  { path: 'sign-up', loadChildren: './auth/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

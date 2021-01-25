import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'photo', redirectTo:'photo/1', pathMatch: 'full' },
  { path: 'photos', component: GridComponent },
  { path: '', redirectTo: '/photos', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

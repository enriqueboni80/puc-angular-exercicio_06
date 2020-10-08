import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './views/movie/movie.component';
import { MovieDetailComponent } from './views/movie/movie-detail/movie-detail.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {path: "",component: MovieComponent},
  {path: "movie/:id",component: MovieDetailComponent},
  {path: "about",component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

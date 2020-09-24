import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'movie/:movieId',
    loadChildren: () => import('../movie/movie.module').then( m => m.MoviePageModule)
  },
  {
    path: 'serie/:serieId',
    loadChildren: () => import('../serie/serie.module').then( m => m.SeriePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

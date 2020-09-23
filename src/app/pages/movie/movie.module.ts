import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';
import { RatingModule } from 'ng-starrating';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule,
    RatingModule,
    ComponentsModule
  ],
  declarations: [MoviePage]
})
export class MoviePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculaPageRoutingModule } from './pelicula-routing.module';

import { PeliculaPage } from './pelicula.page';
import {RatingModule} from 'ng-starrating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculaPageRoutingModule,
    RatingModule
  ],
  declarations: [PeliculaPage]
})
export class PeliculaPageModule {}

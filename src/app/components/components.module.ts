import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemSlideComponent} from './item-slide/item-slide.component';
import {IonicModule} from '@ionic/angular';
import {RatingModule} from 'ng-starrating';
import {RouterModule} from '@angular/router';
import {CastSlideComponent} from './cast-slide/cast-slide.component';
import {PipesModule} from '../pipes/pipes.module';



@NgModule({
  declarations: [ItemSlideComponent, CastSlideComponent],
    imports: [
        CommonModule,
        IonicModule,
        RatingModule,
        RouterModule,
        PipesModule
    ],
  exports: [
      ItemSlideComponent, CastSlideComponent
  ]
})
export class ComponentsModule { }

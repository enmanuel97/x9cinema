import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemSlideComponent} from './item-slide/item-slide.component';
import {IonicModule} from '@ionic/angular';
import {RatingModule} from 'ng-starrating';



@NgModule({
  declarations: [ItemSlideComponent],
  imports: [
    CommonModule,
    IonicModule,
    RatingModule
  ],
  exports: [
      ItemSlideComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemSlideComponent} from './item-slide/item-slide.component';
import {IonicModule} from '@ionic/angular';
import {RatingModule} from 'ng-starrating';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ItemSlideComponent],
    imports: [
        CommonModule,
        IonicModule,
        RatingModule,
        RouterModule
    ],
  exports: [
      ItemSlideComponent
  ]
})
export class ComponentsModule { }

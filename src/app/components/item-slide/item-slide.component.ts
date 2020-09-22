import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-slide',
  templateUrl: './item-slide.component.html',
  styleUrls: ['./item-slide.component.scss'],
})
export class ItemSlideComponent implements OnInit {

  @Input() title: string;
  @Input() items: any[];

  public slideOpts = {
    slidesPerView: 1.5,
    freeMode: true,
    spaceBetween: 15
  };

  constructor() { }

  ngOnInit() {}

  onItemClick(item) {
    console.log(item);
  }
}

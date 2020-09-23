import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cast-slide',
  templateUrl: './cast-slide.component.html',
  styleUrls: ['./cast-slide.component.scss'],
})
export class CastSlideComponent implements OnInit {

  @Input() movieCast: any[] = [];
  public slideOpts = {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween: 15
  };

  constructor() { }

  ngOnInit() {}

}

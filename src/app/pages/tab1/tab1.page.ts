import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public showIonSearchBar: boolean = false;
  public genres: any[] = [];

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true,
    spaceBetween: 15
  };

  constructor(private movieService: MovieService) {
    this.movieService.getGenres().subscribe((result: any) => {
      this.genres = result.genres;
    });
  }

  onSearchChange(event) {

  }

  showSearchBar() {
    this.showIonSearchBar = !this.showIonSearchBar;
  }

  segmentChanged(event) {

  }
}

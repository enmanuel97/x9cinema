import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public showIonSearchBar: boolean = false;
  public genres: any[] = [];
  public movies: any[] = [];
  public series: any[] = [];

  public slideOpts = {
    slidesPerView: 1.5,
    freeMode: true,
    spaceBetween: 15
  };

  constructor(private movieService: MovieService) {
    this.loadData();
  }

  showSearchBar() {
    this.showIonSearchBar = !this.showIonSearchBar;
  }

  onSearchChange(event) {

  }

  segmentChanged(event) {
    this.loadData(event.detail.value);
  }

  private loadData(genre = 0) {
    combineLatest([
      this.movieService.getGenres(),
      this.movieService.getPopular('movie', Number(genre)),
      this.movieService.getPopular('tv', Number(genre)),
    ]).subscribe(([genres, movies, series]) => {
      this.genres = genres.genres;
      this.movies = movies;
      this.series = series;
    });
  }
}

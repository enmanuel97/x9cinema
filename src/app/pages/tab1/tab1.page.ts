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
    combineLatest([
      this.movieService.getGenres(),
      this.movieService.getPopularMovies(),
      this.movieService.getPopularSeries(),
    ]).subscribe(([genres, movies, series]) => {
      this.genres = genres.genres;
      this.movies = movies;
      this.series = series;
      console.log(movies);
      console.log(series);
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

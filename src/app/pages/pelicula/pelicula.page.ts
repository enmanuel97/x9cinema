import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {
  public movieDetail: any;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.movieId);
      this.movieService.getPeliculaDetalle(params.movieId).subscribe(movie => {
        console.log(movie);
        this.movieDetail = movie;
      });
    });
  }

  ngOnInit() {
  }

}

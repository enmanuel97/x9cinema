import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  public movieDetail: any;
  public movieCast: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    this.activatedRoute.params.subscribe(params => {
      combineLatest([
        this.movieService.getDetail(params.movieId, 'movie'),
        this.movieService.getCast(params.movieId, 'movie')
      ]).subscribe(([movie, cast]) => {
        this.movieDetail = movie;
        this.movieCast = cast.filter(actor => actor.profile_path != null);
      });
    });
  }

  ngOnInit() {
  }

}

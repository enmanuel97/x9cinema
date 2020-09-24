import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage implements OnInit {

  public serieDetail: any;
  public serieCast: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    this.activatedRoute.params.subscribe(params => {
      combineLatest([
        this.movieService.getDetail(params.serieId, 'tv'),
        this.movieService.getCast(params.serieId, 'tv')
      ]).subscribe(([serie, cast]) => {
        this.serieDetail  = serie;
        console.log(serie);
        this.serieCast    = cast;
      });
    });
  }

  ngOnInit() {
  }

}

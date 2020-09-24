import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CarteleraResponse, Movie} from '../interfaces/cartelera-response';
import {catchError, map, take, tap} from 'rxjs/operators';
import {MovieResponse} from '../interfaces/movie-response';
import {Cast, CreditResponse} from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private page = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: '62ab7dd117eff48e4d7f299e11a137d7',
      language: 'es-ES',
      page: this.page.toString()
    };
  }

  getGenres() {
    return this.http.get<any>(`${this.baseUrl}/genre/movie/list`, {
      params: this.params
    });
  }

  getPopular(type:string = 'movie', genre: number = 0) {
    let params = {
      api_key: '62ab7dd117eff48e4d7f299e11a137d7',
      language: 'es-ES',
      sort_by: 'popularity.desc',
      page: this.page.toString(),
    };

    if(genre !== 0) {
      params['with_genres'] = genre;
    }

    return this.http.get<any>(`${this.baseUrl}/discover/${type}`, {params}).pipe(map(data => {
      return data.results;
    }));
  }
  
  getDetail(id: string, type = 'movie') {
    return this.http.get<MovieResponse>(`${this.baseUrl}/${type}/${id}`, {
      params: this.params
    }).pipe(catchError(err => of(null)));
  }

  getCast(id: string, type = 'movie'): Observable<Cast[]> {
    return this.http.get<CreditResponse>(`${this.baseUrl}/${type}/${id}/credits`, {
      params: this.params
    }).pipe(
        map(resp => resp.cast),
        catchError(err => of([]))
    );
  }

  // resetPage() {
  //   this.page = 1;
  // }

  // getCartelera(): Observable<Movie[]> {
  //
  //   if (this.cargando) {
  //     return of([]);
  //   }
  //
  //   this.cargando = true;
  //
  //   // @ts-ignore
  //   return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
  //     params: this.params
  //   }).pipe(
  //       map((resp) => resp.results),
  //       tap(() => {
  //         this.carteleraPage += 1;
  //         this.cargando = false;
  //       }));
  // }

  // buscarPelicula(texto: string): Observable<Movie[]> {
  //   const params = {...this.params, page: '1', query: texto};
  //   return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {params}).pipe(map(resp => resp.results));
  // }
}

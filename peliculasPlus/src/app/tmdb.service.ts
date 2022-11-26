import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiKeyEs = "api_key=9e50c5a0f175a40039150639aa6dfa43&language=es-ES";
  private baseUrl = "https://api.themoviedb.org/3";
  private trendingUrl = '/trending/movie/week?';
  private genresUrl = '/genre/movie/list?';
  public img_url = 'https://image.tmdb.org/t/p/w500';

  constructor(private httpClient: HttpClient) { }

  getGenres = () => {
    let url = this.baseUrl + this.genresUrl + this.apiKeyEs;
    return this.httpClient.get(url);
  }

  getTrending = () => {
    let url = this.baseUrl + this.trendingUrl + this.apiKeyEs;
    return this.httpClient.get(url);
  }

  getImgUrl = () => {

  }

}

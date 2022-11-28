import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  url: any;
  data: any;
  hehe: any;

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.url = this.service.baseUrl + this.service.moviesUrl + this.service.apiKeyEs +  this.service.boton;
    this.service.getMovies(this.url)
    .subscribe(res => {
      this.data = res;
    })
  }

}

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
  hehe: any = sessionStorage.getItem('genreId')

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.url = this.service.baseUrl + this.service.moviesUrl + this.service.apiKeyEs +  this.hehe;
    this.service.getMovies(this.url)
    .subscribe(res => {
      this.data = res;
    })
    console.log(this.hehe)
  }

  addItem(newItem: string) {
    this.hehe = newItem;
  }



}

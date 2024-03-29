import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  data: any;
  currentPage: any;
  nextPage: any;
  prevPage: any;
  totalPages : any;
  flag: any = sessionStorage.getItem('page=');

  hehe: any = sessionStorage.getItem('genreId');

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.service.getMovies(this.hehe)
    .subscribe(res => {
      this.data = res;
      if (this.data.results.length !== 0) {
      this.currentPage = this.data.page;
      this.nextPage = this.currentPage + 1;
      this.prevPage = this.currentPage - 1;
      this.totalPages = this.data.total_pages;
      console.log(this.hehe.slice(0, -1));
      }
    })
  }


  nextMoviePage = () => {
    if (this.flag == '0') {
      sessionStorage.setItem('genreId', this.hehe + "&page=" + this.nextPage)
      sessionStorage.setItem('page=', '1');
    }else {
      this.hehe = this.hehe.slice(0, -1)
      sessionStorage.setItem('genreId', this.hehe + this.nextPage)
    }
  }

  prevMoviePage = () => {
    this.hehe = this.hehe.slice(0, -1)
    sessionStorage.setItem('genreId', this.hehe + this.prevPage)

  }



}

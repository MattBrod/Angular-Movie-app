import { Component, OnInit} from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  data: any;

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.service.getGenres()
    .subscribe(res => {
      this.data = res;
    })
  }

  setGenre = (id: any) => {
    sessionStorage.setItem('genreId', '&with_genres='+id);
  }

}

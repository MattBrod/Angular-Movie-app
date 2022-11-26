import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  data: any;
  top5: any;
  haha: string = this.service.img_url;

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.service.getTrending()
    .subscribe(res => {
      this.data = res;
      this.top5 = this.data.results.slice(0, 5);
      console.log(this.top5);
    })
  }

  joinPath = (back: string) => {
    return this.service.img_url + back;
  }

}

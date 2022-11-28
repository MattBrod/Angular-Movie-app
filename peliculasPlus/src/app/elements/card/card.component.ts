import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() name = '';
  @Input() img = '';
  haha: string = this.service.img_url;

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
  }

}

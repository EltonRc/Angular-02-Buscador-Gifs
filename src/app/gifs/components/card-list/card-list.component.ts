import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gif.service';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  constructor( private gifsService:GifsService){}
  
  get input(){
    return this.gifsService.listHistory[0];
  }

  get listGifs(){
    return [...this.gifsService.listGifs]
  }
  
  

}

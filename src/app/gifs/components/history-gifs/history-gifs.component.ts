import { Component } from '@angular/core';
import { GifsService } from '../../services/gif.service';

@Component({
  selector: 'gifs-history',
  templateUrl: './history-gifs.component.html',
  styleUrls: ['./history-gifs.component.css']
})
export class HistoryGifsComponent {

  constructor (private gifsService:GifsService){}
  get listHistory(){
    return [...this.gifsService.listHistory]
  }
  newInput(input:string){
    return this.gifsService.newInput(input);
  }
  showGif(input:string){
    this.newInput(input);
  }
}

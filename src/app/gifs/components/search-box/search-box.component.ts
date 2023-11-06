import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Output()
  public onNewInput:EventEmitter<string> = new EventEmitter();

  public input:string ="";

  emitInput(){
    this.onNewInput.emit(this.input);
    this.input=""
  }
}

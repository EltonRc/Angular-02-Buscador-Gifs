import { Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  public gifcard!: Gifs;
}

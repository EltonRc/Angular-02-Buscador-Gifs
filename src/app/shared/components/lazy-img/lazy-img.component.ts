import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-img',
  templateUrl: './lazy-img.component.html',
  styleUrls: ['./lazy-img.component.css']
})
export class LazyImgComponent {

  @Input()
  public url!: string;
  @Input()
  public alt!: string;

  public hasLoaded:boolean = false;

  onload(){
    this.hasLoaded=true;
  }
}

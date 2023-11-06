import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gif.service';

@Component({
    selector: 'gifs-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
    constructor (private gifsService:GifsService){}

    newInput(input:string){
        return this.gifsService.newInput(input);
    }

}
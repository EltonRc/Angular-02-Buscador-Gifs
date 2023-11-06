import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/gifs.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GifsService {
    //Para hacer la petición HTTP
    constructor( private http:HttpClient) { }
    //Array de historial de búsqueda
    private _listHistory:string[]=[];
    //Array de los gifs
    public listGifs:Gifs[] =[]

    //Datos de la API
    public url: string = "api.giphy.com/v1/gifs";
    public api_key:string = "ih5x3B5uhBK9JqLBP3GNdtVz6IjJTE1Z";

    get listHistory(){
        return this._listHistory;
    }

    limitListHistory(tag:string){
        if(tag.length<3) return;
        tag= tag.toLowerCase();
        this._listHistory = this._listHistory.filter( val => tag !== val );
        this._listHistory.unshift(tag);
        this._listHistory = this._listHistory.splice(0,5);
    }

    newInput(input:string){
        this.limitListHistory(input);
        this.http.get<SearchResponse>(`https://${this.url}/search?api_key=${this.api_key}&q=${input}&limit=12`)
        .subscribe ( resp => {
            this.listGifs = resp.data;
        })
    }


}
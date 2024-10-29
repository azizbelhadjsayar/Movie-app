import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private searchUrl = 'https://www.omdbapi.com/?apikey=cf7e8763&s=';
  private idUrl = 'https://www.omdbapi.com/?apikey=cf7e8763&i=';

  showWishList:boolean=false;

  HeartStyle = {
    'position': 'absolute',
    'right': '30px',
    'top': '30px',
    'font-size': '30px',
    'color': 'white',
    'cursor': 'pointer'
  };
  
  selectedMovieDetails!:any;
  wishList:{ [key: string]: any }={};

  addDeleteWishList(id:any) {
    if(!(id in this.wishList)) {
      this.wishList[id] = this.selectedMovieDetails;
      this.HeartStyle = {
        'position': 'absolute',
        'right': '30px',
        'top': '30px',
        'font-size': '30px',
        'color': 'red',
        'cursor': 'pointer'
      };
    }
    else {
      delete this.wishList[id];
      this.HeartStyle = {
        'position': 'absolute',
        'right': '30px',
        'top': '30px',
        'font-size': '30px',
        'color': 'white',
        'cursor': 'pointer'
      };
    }
  }

  constructor(private http: HttpClient) {}

  getMovieList(title:string): Observable<any> {
    return this.http.get<any>(this.searchUrl+title);
  }

  getMovieById(id:string): Observable<any>{
    return this.http.get<any>(this.idUrl+id);
  }
}

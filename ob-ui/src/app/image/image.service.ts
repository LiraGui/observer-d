import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createAuthorizationHeader } from '../../headers';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public getAllImages() {
    let httpOptions: any = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      }
    }
    let images: any;
    console.log('Entrei no service');
    images = this.http.get('http://localhost:4000/api/images/simple', httpOptions);
    return images;
  }

  public teste(){
    let httpOptions: any = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    }
    let httpOpString: any = JSON.stringify(httpOptions);
    
    this.http.get('http://127.0.0.1:3000', httpOpString)
      .subscribe(
        data => {
          console.log(data);
        },
        erro => {
          console.log("Fatal error", erro);
        });
  }

}

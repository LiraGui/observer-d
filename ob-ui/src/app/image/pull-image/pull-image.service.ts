import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PullImageService {

  constructor(private http: HttpClient) { }

  public getImageFromHub(name: string) {
    let images: any;
    images = this.http.get(`http://localhost:4000/api/images/search?term=${name}`).toPromise();
    return images;
  }
}

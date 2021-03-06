import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { createAuthorizationHeader } from '../../headers';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public getAllImages() {
    let images: any;
    images = this.http.get('http://localhost:4000/api/images/simple');
    return images;
  }
}

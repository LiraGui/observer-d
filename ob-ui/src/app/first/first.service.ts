import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirstService {
  private REST_API_SERVER: string = 'http://localhost:4000';
  handleError: any;
  constructor(private http: HttpClient) { }
  public getImages() {
    console.log("Make request");
    return this.http.get(`${this.REST_API_SERVER}/api/images/simple`).pipe(retry(3), catchError(this.handleError)).subscribe((data: any[]) => {
      console.log(data);
    });
    
    // return new Promise((resolve, reject) => {
    //   this.http.get(`${this.REST_API_SERVER}/api/images/simple`).subscribe((data) => {
    //     console.log(data);
    //     resolve(data);
    //   });
    // })
  }

  getSomeData() {
    return ['Matheus', 'Tanga'];
  }
}

import { Component, OnInit } from '@angular/core';
import { FirstService } from './first.service';
@Component({
  selector: 'first-comp',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit {
  someData: any;
  images: any;
  constructor(public service: FirstService) { }


  ngOnInit(): void {
    this.images = this.service.getImages();
  }

}
 
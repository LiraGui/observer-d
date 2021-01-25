import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'image-comp',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {

  constructor(public image: ImageService) { }

  ngOnInit(): void {
    let resImages: any;
    resImages = this.image.getAllImages();
  }

}

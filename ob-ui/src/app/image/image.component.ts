import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageService } from './image.service';

@Component({
  selector: 'image-comp',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {
  resImages: any;
  pullImageName: any;
  constructor(public image: ImageService) { 
    this.image.getAllImages().subscribe((data: any[]) => {
      this.resImages = data;
      console.log(this.resImages);
    });
  }

  searchImage() {
    console.log(this.pullImageName);
    this.image.getImageFromHub(this.pullImageName).then((data: any[]) => {
      console.log(data);
    }).catch((err: any[]) => {
      console.log("ERROR ==> ",err);
      
    })
  }

  ngOnInit(): void {
  }
}

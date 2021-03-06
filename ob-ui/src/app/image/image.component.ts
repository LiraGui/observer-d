import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageService } from './image.service';
import { PullImageComponent } from './pull-image/pull-image.component';

@Component({
  selector: 'image-comp',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {
  resImages: any;
  pullImageName: any;
  @ViewChild(PullImageComponent) pullImageComponent!: PullImageComponent;
  constructor(public image: ImageService) { 
    this.getImages();
  }
  searchImage() { this.pullImageComponent.searchImage(); }

  getImages(){
    this.image.getAllImages().subscribe((data: any[]) => {
      this.resImages = data;
    });
  }

  cleanSearchImages(){
    this.pullImageName = '';
    this.pullImageComponent.clean();
    this.getImages();
  }

  emitAlert(event: any){
    if(event){
      alert("Clean completed");
    }
  }

  ngOnInit(): void { 
  }
}
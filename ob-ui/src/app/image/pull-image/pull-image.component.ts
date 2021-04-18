import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { PullImageService } from './pull-image.service';

@Component({
  selector: 'pull-image',
  templateUrl: './pull-image.component.html',
  styleUrls: ['./pull-image.component.sass']
})
export class PullImageComponent implements OnInit {
  searchedImages: any;
  pullImageName: any;
  @Input()
  @Output() cleaned = new EventEmitter();
  constructor(public pullImage: PullImageService) { }

  clear(){
    this.searchedImages = '';
    this.pullImageName = '';
    this.searchImage();
  }

  pullImageFromHub() { }

  searchImage() {
    this.pullImage.getImageFromHub(this.pullImageName)
    .then((data: any[]) => {
      this.searchedImages = data;
    }).catch((err: any[]) => {
      console.log("ERROR ==> ",err);
    })
  }

  ngOnInit(): void {}
}

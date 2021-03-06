import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { PullImageService } from './pull-image.service';

@Component({
  selector: 'pull-image',
  templateUrl: './pull-image.component.html',
  styleUrls: ['./pull-image.component.sass']
})
export class PullImageComponent implements OnInit {
  searchedImages: any;
  @Input() imageName: any;
  @Output() cleaned = new EventEmitter();
  constructor(public pullImage: PullImageService) { }

  clean(){
    this.imageName = '';
    this.searchedImages = '';
    this.searchImage();
    this.cleaned.emit(true);
  }

  searchImage() {
    this.pullImage.getImageFromHub(this.imageName).then((data: any[]) => {
      this.searchedImages = data;
    }).catch((err: any[]) => {
      console.log("ERROR ==> ",err);
    })
  }

  ngOnInit(): void { 
    console.log(this.imageName);
  }
}

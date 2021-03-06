import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { PullImageComponent } from './pull-image/pull-image.component';


@NgModule({
  declarations: [
    ImageComponent,
    PullImageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ImageComponent
  ]
})
export class ImageModule { }

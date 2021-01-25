import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ImageComponent
  ]
})
export class ImageModule { }

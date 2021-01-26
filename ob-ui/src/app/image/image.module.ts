import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    ImageComponent
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

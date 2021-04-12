import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { PullImageComponent } from './pull-image/pull-image.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ImageComponent,
    PullImageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [
    ImageComponent
  ]
})
export class ImageModule { }

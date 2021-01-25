import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component'; 
import { FirstService } from './first.service';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FirstComponent
  ],
  providers: [
    FirstService
  ]
})
export class FirstModule { }

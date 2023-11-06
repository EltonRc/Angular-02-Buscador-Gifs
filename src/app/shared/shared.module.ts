import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgComponent } from './components/lazy-img/lazy-img.component';



@NgModule({
  declarations: [
    LazyImgComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    LazyImgComponent
  ]
})
export class SharedModule { }

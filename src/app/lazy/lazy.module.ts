import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyComponent} from './lazy.component';
import {RouterModule} from '@angular/router'



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:LazyComponent}
    ])
  ],
  declarations: [LazyComponent]
})
export default class LazyModule { }

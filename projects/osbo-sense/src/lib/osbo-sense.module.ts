import { NgModule } from '@angular/core';
import { OsboSenseComponent } from './osbo-sense.component';
import { OsboSenseService } from './osbo-sense.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    OsboSenseComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    OsboSenseComponent
  ],
  providers:[
    OsboSenseService
  ]
})
export class OsboSenseModule { }

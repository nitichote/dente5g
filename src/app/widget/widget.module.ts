import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { BarchartComponent } from './barchart/barchart.component';


@NgModule({
  declarations: [
    BarchartComponent
  ],
  imports: [
    CommonModule,
    WidgetRoutingModule
  ]
})
export class WidgetModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentpersonRoutingModule } from './dentperson-routing.module';
import { PsHomeComponent } from './ps-home.component';
import { PsViewComponent } from './ps-view.component';
import { PsEditComponent } from './ps-edit.component';


@NgModule({
  declarations: [
    PsHomeComponent,
    PsViewComponent,
    PsEditComponent
  ],
  imports: [
    CommonModule,
    DentpersonRoutingModule
  ]
})
export class DentpersonModule { }

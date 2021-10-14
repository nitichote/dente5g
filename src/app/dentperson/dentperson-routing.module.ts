import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsHomeComponent } from './ps-home.component';
import { PsViewComponent } from './ps-view.component';

const routes: Routes = [
  { 
    path:  '',
    component:  PsHomeComponent,
  },
  { 
    path:  'view',
    component:  PsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentpersonRoutingModule { }

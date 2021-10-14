import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path:  '',
    component:  HomeComponent,
  },
  {
    path: 'ps',
    loadChildren: () => import('./dentperson/dentperson.module').then(m => m.DentpersonModule)
  },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

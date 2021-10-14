import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShareModule } from './share/share.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiChoteService } from "./service/api-chote.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [BrowserAnimationsModule,ShareModule,HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiChoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

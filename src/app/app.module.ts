import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Leyout1Component } from './leyout1/leyout1.component';

import { Layout3Component } from './layout3/layout3.component';
import { Layout2Component } from './layout2/layout2.component';

@NgModule({
  declarations: [AppComponent, Leyout1Component, Layout3Component, Layout2Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

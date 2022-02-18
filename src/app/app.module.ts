import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirtsComponent } from './firts/firts.component';
import { SecondComponent } from './second/second.component';



@NgModule({
  declarations: [
    AppComponent,
    FirtsComponent,
    SecondComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

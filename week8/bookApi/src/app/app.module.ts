import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import * as fromBooks from './books';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent, ...fromBooks.components, NavComponent
  ],
  imports: [
    BrowserModule,  FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

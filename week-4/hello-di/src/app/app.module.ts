/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   03 August 2019
; Modified By: Drew Hanson
; Description: Exercise 4.2 Inversion of Control and Dependency Injection
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

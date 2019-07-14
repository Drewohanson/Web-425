/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   13 July 2019
; Modified By: Drew Hanson
; Description: Hello World
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


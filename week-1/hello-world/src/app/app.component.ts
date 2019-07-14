/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   13 July 2019
; Modified By: Drew Hanson
; Description: Hello World
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello World!';
}

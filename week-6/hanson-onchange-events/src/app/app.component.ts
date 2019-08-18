/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 17 August 2019
; Modified By: Drew Hanson
; Description: app.component.ts
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hanson-onchange-events';

  myGreeting = 'hello';
  myUser: { name: string } = { name: 'Drew' }
}

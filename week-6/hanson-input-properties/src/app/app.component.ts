/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 13 August 2019
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
  title = 'hanson-input-properties';

  stock: string;
  readonly numberOfShares = 100

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}

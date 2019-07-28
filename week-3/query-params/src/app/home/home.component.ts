/*
============================================
; Title:  home Component
; Author: Professor Krasso
; Date:   28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.2
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h1>This is the Home Page!</h1>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h1 {
      color: green;
      text-align: center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

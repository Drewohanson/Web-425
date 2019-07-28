/*
============================================
; Title:  e404 Component
; Author: Professor Krasso
; Date:   28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.2
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h4>Error wrong page! wrong page! Do not enter!</h4>
      </div>
    </div>
  `,
  styles: [`
    .container{
      margin-top: 20px;
    }
    h4 {
      color: Red;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

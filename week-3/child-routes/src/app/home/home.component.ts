/*
============================================
; Title: home component
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.3
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="homeContainer">
    <h2>
      USA Clothing for cats and chickens
    </h2>
    <p>Your pets, your style</p>
    </div>
  `,
  styles: [`
    h2, p {
      text-align: center;
      padding: 20px;
      color: black;
    }
    .homeContainer {
      background:light blue;
      height:252px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

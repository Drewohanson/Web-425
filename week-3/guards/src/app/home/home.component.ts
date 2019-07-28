/*
============================================
; Title:Home component
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exrcise 3.4
;===========================================
*/

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <h1 class="home">
      Welcome to Guards
    </h1>
  `,
  styles: [`
    .home {
      background-color: darkblue;
      text-align: center;
      color: #fff;
      padding: 50px;

    }
  `]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

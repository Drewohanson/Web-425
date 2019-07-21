/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   20 July 2019
; Modified By: Drew Hanson
; Description: Exercise 2.4
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <br/><br/>
  <div class="jumbotron">
  <h1 class="display-4">Welcome! You are at home</h1>
  <p class="lead">This is a paragraph on the home page. Or maybe just a few sentences</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Button</a>
  </p>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

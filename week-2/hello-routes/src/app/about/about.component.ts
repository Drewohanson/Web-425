/*
============================================
; Title:  about.component.ts
; Author: Professor Krasso
; Date:   20 July 2019
; Modified By: Drew Hanson
; Description: Exercise 2.4
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <br/>
  <div class="content">
    <h1 class="text-cetnter">About</h1>
    <div class="text-left form">
      <p>Blah Blah Blah we are boring. Here is a random joke. Ok I am not funny.</p>

    </div>
  </div>
  `,
  styles: [`
  .content{
    background-color: forestgreen;
    border-radius: 10px;
    color: white;
  }
  p{
    text-indent:25px;
    font-weight:200;
  }
  .form{
    padding-left:20px;
    padding-right:15px;
    padding-bottom:20px;
  }
  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

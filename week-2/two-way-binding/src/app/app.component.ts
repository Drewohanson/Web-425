/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   20 July 2019
; Modified By: Drew Hanson
; Description: Exercise 2.3 Two-Way Binding
;===========================================
*/

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template:`<br /><br /><br />   <div class="container-fluid two-way-form">
    <h2>Two-Way Binding Example</h2><br/>     <div class="form-group">
      <input class="form-control" type="text"  placeholder="Enter your name ..." [(ngModel)]="name">
      <br />
      <button class="btn btn-info form-control" (click)="name=''">Clear Name</button>
    </div>
    <div class="form-group">
      <p class="alert-info">Welcome to Two way binding {{name}}! </p>
    </div>
  </div>`

  ,
  styles: [
    `
      h2 {
        color: #17a2b8;
      }
      .two-way-form {
        width: 50%;
      }
    `
  ]
})
export class AppComponent {
  name: string;
}

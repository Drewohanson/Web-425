/*
=====================================
  ; Title: app.component.ts
  ; Author: Drew Hanson
  ; Date: July 20 2019
  ; Modified By: Drew Hanson
  ; Description: app.component.ts
======================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: <br/><br/><br/>
  <div class='container-fluid  two-way-form'>
  <br/><br/>
    <h2 class="text-center">Two-way Binding Example</h2>
    <div class="form-group">
    <input class="form-control" type="text"
      placeholder="Enter your name ..."
      [(ngModel)]="name">
    <br/>
      <button class="btn btn-primary form-control" (click)="name=''">
      Clear Name</button>
    </div>
    <div class="form-group">
      <p class="alert-success">Welcome to two-way binding, <strong>{{name}}</strong>!</p>
    </div>
    <br/><br/>
  </div>,
  styles:[
  .two-way-form{
    width: 50%;
    background-color: #8533ff;
    border-radius: 10px;
    color: white;
  }]
})
export class AppComponent {
  title = 'hanson-two-way-binding';
  name: string;
}

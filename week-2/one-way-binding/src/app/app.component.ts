/*
=====================================
  ; Title: app.component.ts
  ; Author: Drew Hanson
  ; Date: July 22 2019
  ; Modified By: Drew Hanson
  ; Description: app.component.ts
======================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<h1>{{ name }}</h1>  <button (click)="changeName()">Change Name</button>',
  styles:['h1{ color: red; }']
})
export class AppComponent {
  title = 'app';

  //class Property
  name:string = 'Drew Hanson';

  //change name function
  changeName(){
    this.name = "Drew Osborn Hanson";
  }
}

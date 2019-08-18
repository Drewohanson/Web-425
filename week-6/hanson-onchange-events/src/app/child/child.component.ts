/*
=====================================
  ; Title: Assignment 6.4
  ; Author: Professor Krasso
  ; Date: August 17 2019
  ; Modified By: Drew Hanson
  ; Description: child.components.ts
======================================
*/

import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class='child'>
      <h2>Child</h2>
      <div>Greeting: <strong>{{ greeting }}</strong></div>
      <br>
      <div>User Name:<strong>{{ user.name }}</strong></div>
    </div>
  `,
  styles: [`
  .child{
    background-color: gray;
  }
  `]
})
export class ChildComponent implements OnChanges{
  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}

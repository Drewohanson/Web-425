/*
=====================================
  ; Title: shipping.components.ts
  ; Author: Drew Hanson
  ; Date: July 13 2019
  ; Modified By: Drew Hanson
  ; Description: shipping.components.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Hanson's shipping works!
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

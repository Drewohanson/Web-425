/*
============================================
; Title:product detail component
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exrcise 3.4
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  template: `
  <div class="container-fluid">
    <div class="text-center">
      <h1 class="product">Product Detail Component</h1>
      <input placeholder="Enter your name" type="text" [formControl]="name">
    </div>
  </div>
  `,
  styles: [ `
    .product {
      backgorund-color: dark blue;
      color: white;
      margin:20px;
    }
  `]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}

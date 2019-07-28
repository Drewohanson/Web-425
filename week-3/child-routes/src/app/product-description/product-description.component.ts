/*
============================================
; Title: product description component
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.3
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <div class="productContainer">
      <h4 class="text-danger">Toxic!</h4>
      <p class="text-white">clothing for your favorite cats and chickens!</p>
    </div>
  `,
  styles: [`
  .productContainer {
    background:grey;
    padding:20px
  }
  `]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

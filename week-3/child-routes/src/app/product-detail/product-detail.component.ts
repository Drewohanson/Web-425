/*
============================================
; Title: product detail component
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.3
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="productContainer text-white">
      <h1> Details for product: {{productId}} </h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
    </div>
  `,
  styles: [`
  .productContainer {
    background: light blue;
    padding:20px
  }
  a {
    margin-left:50px;
  }
  `]
})
export class ProductDetailComponent implements OnInit {

  productId: string;

  sellerId = 987654

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}

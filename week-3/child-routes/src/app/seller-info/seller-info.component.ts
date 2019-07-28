/*
============================================
; Title: seller-info component
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.3
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <div class="sellerContainer">
    <p>
    USA Clothing for cats and Chickens <br> (555) 555-5555 <br> Seller ID: {{sellerId}}
    </p>
    </div>
  `,
  styles: [`
  .sellerContainer {
    background:grey;
    padding:20px;
    height:116px;
  }
  `]
})
export class SellerInfoComponent implements OnInit {

  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}

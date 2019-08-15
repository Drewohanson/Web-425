/*
============================================
; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 15 August 2019
; Modified By: Drew Hanson
; Description: app.component.ts
;===========================================
*/
import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice-qoute';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hanson-output-properties';
  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}

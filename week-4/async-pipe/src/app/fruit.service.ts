/*
============================================
; Title:  fruit.service.ts
; Author: Professor Krasso
; Date:   03 August 2019
; Modified By: Drew Hanson
; Description: Exercise 4.4
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { Observable, of } from 'rxjs';

@Injectable()

export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: "Grapes", pricePerPound: "$0.99", quantity: 293},
    {id: 2, name: "Banana", pricePerPound: "$0.79", quantity: 450},
    {id: 3, name: "Strawberry", pricePerPound: "$1.99", quantity: 203},
    {id: 4, name: "Orange", pricePerPound: "$1.09", quantity: 107},
    {id: 5, name: "Blueberries", pricePerPound: "$1.99", quantity: 372}
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}

/*
============================================
; Title:  fruit.service.ts
; Author: Professor Krasso
; Date:   03 August 2019
; Modified By: Drew Hanson
; Description: Exercise 4.2 Inversion of Control and Dependency Injection
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit (1593, "grapefruit", "Orange")
  }
}

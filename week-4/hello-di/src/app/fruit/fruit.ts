/*
============================================
; Title:  fruit.ts
; Author: Professor Krasso
; Date:   03 August 2019
; Modified By: Drew Hanson
; Description: Exercise 4.2 Inversion of Control and Dependency Injection
;===========================================
*/

export class Fruit {
  constructor (
                public id: number,
                public Name: string,
                public color: string,
                ) {}
}

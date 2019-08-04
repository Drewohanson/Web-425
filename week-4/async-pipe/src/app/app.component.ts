/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   03 August 2019
; Modified By: Drew Hanson
; Description: Exercise 4.4
;===========================================
*/

import { Component } from '@angular/core';
import { Fruit } from './fruit';

import { FruitService } from './fruit.service';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-info navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Fruits for Sale</h2>
          <table class="table table-hover table-striped">
            <thead class="tbl-header">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody *ngFor="let fruit of fruits | async">
              <tr>
                <td>
                  {{ fruit.id }}
                </td>
                <td>
                  {{ fruit.name }}
                </td>
                <td>
                  {{ fruit.pricePerPound }}
                </td>
                <td>
                  {{ fruit.quantity }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'async-pipe';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }

}

/*
============================================
; Title:  user Component
; Author: Professor Krasso
; Date:   28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.2
;===========================================
*/
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  template: `
    <div class="container">
      <div class="row">
        <h2>Profile for user: {{ userId }}</h2>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
      h2 {
        color: purple;
      }
    `
  ]
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {}
}

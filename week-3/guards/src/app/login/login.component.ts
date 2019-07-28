/*
============================================
; Title:login component
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exrcise 3.4
;===========================================
*/
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  template: `
    <h1 class="login">
      Please Log In
    </h1>
  `,
  styles: [
    `
      .login {
        margin-top: 20px;
        color: green;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

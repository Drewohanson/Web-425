/*
============================================
; Title: Login guard
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exrcise 3.4
;===========================================
*/
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor (private router: Router) {}

  canActivate () {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You're not logged in - Redirecting to login page");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}

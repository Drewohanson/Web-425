/*
=====================================
  ; Title: home.component.ts
  ; Author: Drew Hanson
  ; Date: July 20 2019
  ; Modified By: Drew Hanson
  ; Description: home.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:
  <br/><br/>
  <div class="jumbotron">
  <h1 class="display-4">Welcome to our Home page!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
  to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  ,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

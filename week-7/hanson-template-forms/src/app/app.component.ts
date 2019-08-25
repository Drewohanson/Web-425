/*
=====================================
  ; Title: app.component.ts
  ; Author: Drew Hanson
  ; Date: August 24 2019
  ; Modified By: Drew Hanson
  ; Description: app.component.ts
======================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thomason-template-forms';

  onSubmit(formData){
    console.log(formData);
  }
}

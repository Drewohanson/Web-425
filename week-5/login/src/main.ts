/*
============================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   10 August 2019
; Modified By: Drew Hanson
; Description: Exercise 5.2 - Material Cards
;===========================================
*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

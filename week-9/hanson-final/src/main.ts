/*
=====================================
  ; Title: main.ts
  ; Author: Drew Hanson
  ; Date: September 07 2019
  ; Modified By: Drew Hanson
  ; Description: bob's computer shop
======================================
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

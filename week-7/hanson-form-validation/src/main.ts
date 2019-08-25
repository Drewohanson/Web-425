/*
=====================================
  ; Title: main.ts
  ; Author: Drew Hanson
  ; Date: August 24 2019
  ; Modified By: Drew Hanson
  ; Description: main.ts
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

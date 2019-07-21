/*
=====================================
  ; Title: app.po.ts
  ; Author: Drew Hanson
  ; Date: July 20 2019
  ; Modified By: Drew Hanson
  ; Description: app.po.ts
======================================
*/

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}

/*
============================================
; Title:  app.po.ts
; Author: Professor Krasso
; Date:   10 August 2019
; Modified By: Drew Hanson
; Description: Exercise 5.2 - Material Cards
;===========================================
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

/*
============================================
; Title: unsaved changes guard
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exrcise 3.4
;===========================================
*/

import { Injectable } from "@angular/core";
import { CanDeactivate, Router } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Injectable ()

export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {

  canDeactivate(component: ProductDetailComponent) {
    if (component.name.dirty) {
      return window.confirm("You have unsaved changes - Would you like to continue?");
    } else {
      return true;
    }
  }
}

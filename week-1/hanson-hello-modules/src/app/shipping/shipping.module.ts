/*
=====================================
  ; Title: shipping.module.ts
  ; Author: Drew Hanson
  ; Date: July 13 2019
  ; Modified By: Drew Hanson
  ; Description: shipping.module.ts
======================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShippingComponent],
  exports: [ShippingComponent]
})
export class ShippingModule { }

/*
============================================
; Title: product description component spec
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.3
;===========================================
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionComponent } from './product-description.component';

describe('ProductDescriptionComponent', () => {
  let component: ProductDescriptionComponent;
  let fixture: ComponentFixture<ProductDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

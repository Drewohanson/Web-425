/*
============================================
; Title: seller-info component spec
; Author: Professor Krasso
; Date: 28 July 2019
; Modified By: Drew Hanson
; Description: Exercise 3.3
;===========================================
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerInfoComponent } from './seller-info.component';

describe('SellerInfoComponent', () => {
  let component: SellerInfoComponent;
  let fixture: ComponentFixture<SellerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
=====================================
  ; Title: invoice.component.ts
  ; Author: Drew Hanson
  ; Date: September 07 2019
  ; Modified By: Drew Hanson
  ; Description: bob's computer shop
======================================
*/

import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { OrderComponent} from '../order/order.component'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input() passwordOrder: boolean;
  @Input() passwordPrice: number;
  @Input() public order;

  constructor(private dialogRef: MatDialogRef<OrderComponent>) { }

  ngOnInit() {
    console.log(this.order);
  }

  close() {
    this.dialogRef.close();
};

}

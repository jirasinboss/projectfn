import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private paymentservice: PaymentService) {}

  ngOnInit() {
    this.cartItems = this.paymentservice.getCartItems();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service'; // เพิ่มการนำเข้า PaymentService

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private paymentService: PaymentService, // เพิ่ม PaymentService ในคอนสตรัคเตอร์
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }

  goToPayment() {
    this.paymentService.setCartItems(this.cartItems);
    this.router.navigate(['/payment']);
  }
}

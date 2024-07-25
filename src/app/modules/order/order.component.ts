import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: any[] = [];
  totalCartPrice: number = 0;

  constructor(
    private cartService: CartService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.cartItems.forEach(item => {
      if (!item.quantity || item.quantity < 1) {
        item.quantity = 1;
      }
    });
    this.calculateTotalCartPrice();
  }

  goToPayment() {
    this.paymentService.setCartItems(this.cartItems);
    this.router.navigate(['/payment']);
  }

  increaseQuantity(item: any) {
    item.quantity++;
    this.calculateTotalCartPrice();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(item);
    }
    this.calculateTotalCartPrice();
  }

  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    this.calculateTotalCartPrice();
  }

  calculateTotalItemPrice(item: any): number {
    return item.price * item.quantity;
  }

  calculateTotalCartPrice() {
    this.totalCartPrice = this.cartItems.reduce((total, item) => total + this.calculateTotalItemPrice(item), 0);
  }
}

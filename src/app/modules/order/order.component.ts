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
    // กำหนดค่าเริ่มต้นให้กับ quantity เป็น 1 ถ้ายังไม่ได้ตั้งค่า
    this.cartItems.forEach(item => {
      if (!item.quantity || item.quantity < 1) {
        item.quantity = 1;
      }
    });
  }

  goToPayment() {
    this.paymentService.setCartItems(this.cartItems);
    this.router.navigate(['/payment']);
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }
}

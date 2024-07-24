import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private cartItems: any[] = [];

  constructor() {}

  setCartItems(items: any[]) {
    this.cartItems = items;
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}

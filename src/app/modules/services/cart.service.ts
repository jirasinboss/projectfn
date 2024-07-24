import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  addToCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1; // กำหนดค่าเริ่มต้นให้กับ quantity เป็น 1
      this.cartItems.push(item);
    }
  }

  getCart() {
    return this.cartItems;
  }
  
  // เพิ่มฟังก์ชันสำหรับตั้งค่า cart ใหม่
  setCart(cartItems: any[]) {
    this.cartItems = cartItems;
  }
}
  
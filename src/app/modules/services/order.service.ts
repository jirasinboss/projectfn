import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // หรือกำหนดใน providers ของโมดูลที่ใช้
})
export class OrderService {
  private orderDetails: any;
  private address: any;

  setOrderDetails(details: any) {
    this.orderDetails = details;
  }

  getOrderDetails() {
    return this.orderDetails;
  }

  setAddress(address: any) {
    this.address = address;
  }

  getAddress() {
    return this.address;
  }
}
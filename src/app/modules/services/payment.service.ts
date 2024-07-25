import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private cartItems: any[] = [];
  private uploadedFileUrl: string | ArrayBuffer | null = null;
  private address: any = {};

  constructor() {}

  getCartItems(): any[] {
    return this.cartItems;
  }

  setCartItems(items: any[]): void {
    this.cartItems = items;
  }

  getUploadedFileUrl(): string | ArrayBuffer | null {
    return this.uploadedFileUrl;
  }

  setUploadedFileUrl(url: string | ArrayBuffer | null): void {
    this.uploadedFileUrl = url;
  }

  getAddress(): any {
    return this.address;
  }

  setAddress(address: any): void {
    this.address = address;
  }
}
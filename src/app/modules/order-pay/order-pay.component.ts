import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-order-pay',
  templateUrl: './order-pay.component.html',
  styleUrls: ['./order-pay.component.css']
})
export class OrderPayComponent implements OnInit {
  orderDetails: any[] = [];
  address: any;
  uploadedFileUrl: string | ArrayBuffer | null = null;
  totalAmount: number = 0;

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.orderDetails = this.paymentService.getCartItems();
    this.address = this.paymentService.getAddress();
    this.uploadedFileUrl = this.paymentService.getUploadedFileUrl();
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.orderDetails.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}

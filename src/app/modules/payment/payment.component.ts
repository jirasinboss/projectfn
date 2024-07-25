import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartItems: any[] = [];
  uploadedFileUrl: string | ArrayBuffer | null = null;
  uploadSuccess: boolean = false;
  totalPrice: number = 0;
  address = {
    name: '',
    address: '',
    phone: '',
    postalCode: ''
  };

  constructor(
    private paymentService: PaymentService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.paymentService.getCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getQRCodeImage(price: number): string {
    return `./assets/img/QR${price}.png`;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedFileUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadFile(): void {
    this.paymentService.setUploadedFileUrl(this.uploadedFileUrl);
    this.uploadSuccess = true;
    setTimeout(() => this.uploadSuccess = false, 3000);
  }

  confirmOrder(): void {
    if (this.isAddressComplete()) {
      this.orderService.setOrderDetails(this.cartItems);
      this.paymentService.setAddress(this.address); // Save address details to the service
      alert('การสั่งซื้อสำเร็จ');
      this.router.navigate(['/shoes']); // เปลี่ยนไปหน้า ShoesComponent
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }

  isAddressComplete(): boolean {
    return this.address.name !== '' &&
           this.address.address !== '' &&
           this.address.phone !== '' &&
           this.address.postalCode !== '';
  }
}
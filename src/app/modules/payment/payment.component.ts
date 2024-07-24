import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartItems: any[] = [];
  uploadedFileUrl: string | ArrayBuffer | null = null;
  address = {
    name: '',
    address: '',
    phone: '',
    postalCode: ''
  };

  constructor(private paymentService: PaymentService, private router: Router) {} // Inject Router

  ngOnInit() {
    this.cartItems = this.paymentService.getCartItems();
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
    // Implement file upload logic here if needed
    console.log('File uploaded:', this.uploadedFileUrl);
  }

  confirmOrder(): void {
    if (this.isAddressComplete()) {
      alert('การสั่งซื้อสำเร็จ');
      this.router.navigate(['/shoes']); // Navigate to ShoesComponent
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

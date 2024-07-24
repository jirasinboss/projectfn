import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DataSharingService } from './modules/DataSharingService';
import { ShoesComponent } from './modules/shoes.component.html/shoes.component';
import { OrderComponent } from './modules/order/order.component';
import { PaymentComponent } from './modules/payment/payment.component'; 
import { PaymentService } from './modules/services/payment.service'; // ตรวจสอบให้แน่ใจว่ามีเส้นทางที่ถูกต้อง

@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    OrderComponent,
    PaymentComponent 
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DefaultModule,
    FullwidthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [DataSharingService, PaymentService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

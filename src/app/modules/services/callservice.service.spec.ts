import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // นำเข้า HttpClientTestingModule

import { CallserviceService } from './callservice.service'; // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง

describe('CallserviceService', () => {
  let service: CallserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // นำเข้า HttpClientTestingModule หากเซอร์วิสใช้ HTTP
      providers: [CallserviceService]
    });
    service = TestBed.inject(CallserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { SchoolInfoService } from './school-info.service';

describe('SchoolInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolInfoService]
    });
  });

  it('should ...', inject([SchoolInfoService], (service: SchoolInfoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { DemolibraryService } from './demolibrary.service';

describe('DemolibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemolibraryService]
    });
  });

  it('should be created', inject([DemolibraryService], (service: DemolibraryService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PullImageService } from './pull-image.service';

describe('PullImageService', () => {
  let service: PullImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

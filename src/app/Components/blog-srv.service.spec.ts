import { TestBed } from '@angular/core/testing';

import { BlogSRVService } from './blog-srv.service';

describe('BlogSRVService', () => {
  let service: BlogSRVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogSRVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { ApiSearchService } from './api-search.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApiSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSearchService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ApiSearchService], (service: ApiSearchService) => {
    expect(service).toBeTruthy();
  }));
});

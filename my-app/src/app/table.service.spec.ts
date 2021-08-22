import { TestBed } from '@angular/core/testing';

import { TableService } from './table.service';

import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('TableService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TableService = TestBed.get(TableService);
    expect(service).toBeTruthy();
  });
});
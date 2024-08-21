import { TestBed } from '@angular/core/testing';

import { ToolsLanguagesService } from './tools-languages.service';

describe('ToolsLanguagesService', () => {
  let service: ToolsLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HeaderMenuService } from './header-menu.service';

describe('HeaderMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderMenuService = TestBed.get(HeaderMenuService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgLineComponent } from './bg-line.component';

describe('BgLineComponent', () => {
  let component: BgLineComponent;
  let fixture: ComponentFixture<BgLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

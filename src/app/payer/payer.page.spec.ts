import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerPage } from './payer.page';

describe('PayerPage', () => {
  let component: PayerPage;
  let fixture: ComponentFixture<PayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

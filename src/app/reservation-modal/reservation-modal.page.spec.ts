import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationModalPage } from './reservation-modal.page';

describe('ReservationModalPage', () => {
  let component: ReservationModalPage;
  let fixture: ComponentFixture<ReservationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPagePage } from './first-page.page';

describe('FirstPagePage', () => {
  let component: FirstPagePage;
  let fixture: ComponentFixture<FirstPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

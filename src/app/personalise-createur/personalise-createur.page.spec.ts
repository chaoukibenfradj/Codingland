import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaliseCreateurPage } from './personalise-createur.page';

describe('PersonaliseCreateurPage', () => {
  let component: PersonaliseCreateurPage;
  let fixture: ComponentFixture<PersonaliseCreateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaliseCreateurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaliseCreateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

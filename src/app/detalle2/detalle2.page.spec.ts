import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle2Page } from './detalle2.page';

describe('Detalle2Page', () => {
  let component: Detalle2Page;
  let fixture: ComponentFixture<Detalle2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detalle2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalle2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

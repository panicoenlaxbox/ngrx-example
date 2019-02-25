import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandparent3Component } from './grandparent3.component';

describe('Grandparent3Component', () => {
  let component: Grandparent3Component;
  let fixture: ComponentFixture<Grandparent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandparent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandparent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

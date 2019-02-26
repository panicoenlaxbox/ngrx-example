import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandparent4Component } from './grandparent4.component';

describe('Grandparent4Component', () => {
  let component: Grandparent4Component;
  let fixture: ComponentFixture<Grandparent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandparent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandparent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

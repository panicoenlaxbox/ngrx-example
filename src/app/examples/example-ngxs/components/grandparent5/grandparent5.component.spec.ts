import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandparent5Component } from './grandparent5.component';

describe('Grandparent5Component', () => {
  let component: Grandparent5Component;
  let fixture: ComponentFixture<Grandparent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandparent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandparent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

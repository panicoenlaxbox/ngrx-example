import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandparent2Component } from './grandparent2.component';

describe('Grandparent2Component', () => {
  let component: Grandparent2Component;
  let fixture: ComponentFixture<Grandparent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandparent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandparent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

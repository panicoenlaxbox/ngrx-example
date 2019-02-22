import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDateComponent } from './hero-date.component';

describe('HeroDateComponent', () => {
  let component: HeroDateComponent;
  let fixture: ComponentFixture<HeroDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

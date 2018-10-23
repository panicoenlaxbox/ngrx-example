import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithServiceComponent } from './table-with-service.component';

describe('TableWithServiceComponent', () => {
  let component: TableWithServiceComponent;
  let fixture: ComponentFixture<TableWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

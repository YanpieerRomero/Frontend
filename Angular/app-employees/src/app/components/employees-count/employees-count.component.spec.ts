import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCountComponent } from './employees-count.component';

describe('EmployeesCountComponent', () => {
  let component: EmployeesCountComponent;
  let fixture: ComponentFixture<EmployeesCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

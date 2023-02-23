import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterExpenseComponent } from './enter-expense.component';

describe('EnterExpenseComponent', () => {
  let component: EnterExpenseComponent;
  let fixture: ComponentFixture<EnterExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

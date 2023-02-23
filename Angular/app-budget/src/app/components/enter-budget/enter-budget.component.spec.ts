import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBudgetComponent } from './enter-budget.component';

describe('EnterBudgetComponent', () => {
  let component: EnterBudgetComponent;
  let fixture: ComponentFixture<EnterBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterBudgetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EnterBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

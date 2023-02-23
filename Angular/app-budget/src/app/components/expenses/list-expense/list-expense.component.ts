import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  budget: number;
  remainder: number;
  listExpenses: any[] = [];

  constructor(private _budgetService: BudgetService) {
    this.budget = 0;
    this.remainder = 0;
    this.subscription = this._budgetService.getExpenses().subscribe(data => {
      this.remainder = this.remainder - data.amount;
      this.listExpenses.push(data);
    });
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.remainder = this._budgetService.remainder;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyRemainderColor(): string {
    if (this.budget / 4 > this.remainder) {
      return 'alert alert-danger';
    } else if (this.budget / 2 > this.remainder) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-dark';
    }
  }

}

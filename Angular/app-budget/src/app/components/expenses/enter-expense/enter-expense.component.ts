import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.css']
})
export class EnterExpenseComponent implements OnInit {
  expenseName: string;
  amount: number;
  formIncorrect: boolean;
  textIncorrect: string;

  constructor(private _budgetService: BudgetService) { 
    this.expenseName = '';
    this.amount = 0;
    this.formIncorrect = false;
    this.textIncorrect = '';
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty    
  }

  addExpense(): void {
    if (this.amount > this._budgetService.remainder) {
      this.formIncorrect = true;
      this.textIncorrect = 'Amount entered is greather than remainder';
      return;
    }

    if (this.expenseName === '' || this.amount <= 0) {
      this.formIncorrect = true;
      this.textIncorrect = 'Expense name or amount is incorrect';
      return;
    }

    const EXPENSE = {
      name: this.expenseName,
      amount: this.amount
    }

    this._budgetService.addExpense(EXPENSE);

    this.formIncorrect = false;
    this.expenseName = '';
    this.amount = 0;
  }
}

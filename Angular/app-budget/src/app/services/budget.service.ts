import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget: number;
  remainder: number;
  private expenses$ = new Subject<any>();

  constructor() { 
    this.budget = 0;
    this.remainder = 0;
  }

  addExpense(expense: any): void {
    this.remainder = this.remainder - expense.amount;
    this.expenses$.next(expense);
  }

  getExpenses(): Observable<any> {
    return this.expenses$.asObservable();
  }
}

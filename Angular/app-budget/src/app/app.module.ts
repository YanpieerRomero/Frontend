import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { EnterExpenseComponent } from './components/expenses/enter-expense/enter-expense.component';
import { ListExpenseComponent } from './components/expenses/list-expense/list-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    EnterBudgetComponent,
    EnterExpenseComponent,
    ListExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

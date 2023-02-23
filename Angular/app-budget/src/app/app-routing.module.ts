import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

const routes: Routes = [
  { path: '', redirectTo: '/enterBudget', pathMatch: 'full' },
  { path: 'enterBudget', component: EnterBudgetComponent },
  { path: 'expenses', component: ExpensesComponent },  
  { path: '**', redirectTo: '/enterBudget', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { ModelExpense } from '../model/model-expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {
 Data?:ModelExpense;
  constructor() { }
}

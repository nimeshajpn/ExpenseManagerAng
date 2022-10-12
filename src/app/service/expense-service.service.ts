import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelExpense } from '../model/model-expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {
 
   private url:string='http:localhost:9000/';

  constructor(httpclient:HttpClient) {



   }

   public getAll():Observable<IContact[]>
   {

        let data:string = '${this.url}/expense';

      return 
   }
}

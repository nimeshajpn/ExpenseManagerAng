import { NgIfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelExpense } from '../model/model-expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {
 
   private url:string='https://localhost:7178/Expense';

  constructor(private httpClient:HttpClient) {



   }

   public getAll():Observable<ModelExpense[]>
   {

      //  let data:string = '${this.url}/expense';
      let data:string = 'https://localhost:7178/Expense';

      return this.httpClient.get<ModelExpense[]>(data).pipe();
   }


   public getExpense(id:string):Observable<ModelExpense>{



       let data:string= this.url+'/'+id;

return this.httpClient.get<ModelExpense>(data).pipe();
   }



   public createExpense(data:ModelExpense):any{

    let result = this.httpClient.post(this.url,data).pipe();

      return result;
   }

   public UpdateExpense(data:ModelExpense , id:string):any{

      let updateUrl:string= this.url+'/'+id;
      

      let result = this.httpClient.put(updateUrl,data).pipe();
  
        return result;
     }

     public Delete(id:string):any{

      let deleteUrl:string= this.url+'/'+id;

      let result = this.httpClient.delete(deleteUrl).pipe();
  
        return result;
     }



}

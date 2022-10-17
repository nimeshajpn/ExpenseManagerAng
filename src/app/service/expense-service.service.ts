import { JsonPipe, NgIfContext } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ModelExpense } from '../model/model-expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  private url: string = 'https://localhost:7178/Expense';
  public er: any;
  public Error: any;
  constructor(private httpClient: HttpClient) {



  }

  public getAll(): Observable<ModelExpense[]> {

    //  let data:string = '${this.url}/expense';
    let data: string = 'https://localhost:7178/Expense';
    
    return this.httpClient.get<ModelExpense[]>(data).pipe();
  }


  public getExpense(id: string): Observable<ModelExpense> {



    let data: string = this.url + '/' + id;

    return this.httpClient.get<ModelExpense>(data).pipe(catchError(this.handleError));
  }



  public createExpense(data: ModelExpense): Observable<ModelExpense>
  {


    return this.httpClient.post<ModelExpense>("https://localhost:7178/Expense",data).pipe(catchError(this.handleError));


     
     

  }

  public handleError(Error:HttpErrorResponse)
  {

  let errorMsg:string='';
  if(Error.error instanceof ErrorEvent){



    errorMsg='error : '+Error.error.message ;
    
  }else{

   errorMsg='status error : '+Error.status + '/n Message' + Error.message;


  }
  
  alert('Error!! : '+errorMsg)
    return throwError(errorMsg);


  }

  public UpdateExpense(data: ModelExpense, id: string): any {

    let updateUrl: string = this.url + '/' + id;


    let result = this.httpClient.put(updateUrl, data).pipe(catchError(this.handleError));

    return result;
  }

  public Delete(id: number): any {

    let deleteUrl: string = this.url + '/' + id;

    let result = this.httpClient.delete(deleteUrl).pipe();

    return result;
  }

  public findError(error: HttpErrorResponse): any {

    this.er = error.error.message;




  }




}

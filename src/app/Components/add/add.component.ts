import { ModelExpense } from './../../model/model-expense.model';
import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from 'src/app/service/expense-service.service';
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public  data:ModelExpense= {} as ModelExpense;

  public errorResult:any;
  constructor(public Service:ExpenseServiceService) {

   // this.data.Date=new Date();

   }

  ngOnInit(): void {

   
   

  

  
   

  }

 public btnClick():void
 {
  let result:any = this.Service.createExpense(this.data);
  this.errorResult=result;

 }

}

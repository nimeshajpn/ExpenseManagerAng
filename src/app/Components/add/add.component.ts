import { ModelExpense } from './../../model/model-expense.model';
import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from 'src/app/service/expense-service.service';
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public  data:ModelExpense= {} as ModelExpense;

  public errorMsg:string | null = '';
  constructor(
    public Service:ExpenseServiceService,
    private  router:Router

    ) {

   // this.data.Date=new Date();
   this.errorMsg=null;

   }

  ngOnInit(): void {

   
   

  

  
   

  }

 public btnClick():void
 {
 this.Service.createExpense(this.data).subscribe(
  (data:ModelExpense)=>{


this.router.navigate(['/']).then();

 },(error) => {

this.errorMsg=error;
console.log('Error!!: '+this.errorMsg);
alert('Error' +this.errorMsg);


 }
 );
  
 }

}

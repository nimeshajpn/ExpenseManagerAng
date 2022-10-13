import { ModelExpense } from './../../model/model-expense.model';
import { ExpenseServiceService } from './../../service/expense-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

NgForm
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataSet:ModelExpense[]= [];
  private errorMsg:string | null= null;


  constructor(public HomeService:ExpenseServiceService)
   { 
    
   }

  ngOnInit(): void {


 this.HomeService.getAll().subscribe((data) => {

  this.dataSet=data;



 },(error) => {
    this.errorMsg=error.message;
    if(this.errorMsg!=null)
    {

      console.log(this.errorMsg);
    }
   

 })

  }



}

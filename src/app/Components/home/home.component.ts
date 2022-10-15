import { ModelExpense } from './../../model/model-expense.model';
import { ExpenseServiceService } from './../../service/expense-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';
import { Router } from '@angular/router';


NgForm
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSet:any= '';
  private errorMsg:string | null= null;
  date:any= Date.now();
  dDate:Date= new Date;
 dateOnly:any=this.dDate.getDate();

  constructor(public HomeService:ExpenseServiceService,
    private route:Router
    
    )
   { 
    
   }

  ngOnInit(): void {


 this.HomeService.getAll().subscribe((data) => 
 {
  console.log(data)
  this.dataSet=data;



 },(error) => {
    this.errorMsg=error.message;
    if(this.errorMsg!=null)
    {

      console.log(this.errorMsg);
    }
   

 })

  }

 
  public btnDelete(id:number){

this.HomeService.Delete(id).subscribe(
  (data:any)=>{


    window.location.reload();

 });




  }



}

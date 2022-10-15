import { ExpenseServiceService } from 'src/app/service/expense-service.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ModelExpense } from 'src/app/model/model-expense.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public getId: any= null;
  public  data:ModelExpense= {} as ModelExpense;
 
  errorMsg: any;

  constructor(
   private activateRouter:ActivatedRoute,
   private Service:ExpenseServiceService,
   private route:Router


  ) { 
    this.activateRouter.paramMap.subscribe((param)=> {

      this.getId=param.get('id');
      


    })
    
   this.Service.getExpense(this.getId).subscribe((data)=>{

      this.data=data;


   })




  }

  ngOnInit(): void {
    
  }
  public btnClick():void
  {
  this.Service.UpdateExpense(this.data,this.getId).subscribe(
   (data:ModelExpense)=>{
 
 
 this.route.navigate(['/']).then();
 
  }
  );
   
  }
 
 }
 



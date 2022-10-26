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
  errorName: any;

  test:any;

  amountNull:boolean | null= null;
  descriptionNull:boolean | null= null;
  categoryNull:boolean | null= null;
  typeNull:boolean | null= null;
  dateNull:boolean | null= null;





  constructor(
    public Service:ExpenseServiceService,
    private  router:Router

    ) {


  
   this.errorMsg=null;

   }

  ngOnInit(): void {

   
   

  

  
   

  }

 public btnClick():void
 {


  if(this.data.amount==null || this.data.category == null || this.data.type== null)
  {


    this.buttonClick();





  }
  else{

   

    this.Service.createExpense(this.data).subscribe(
      (data:ModelExpense)=>{
    
    
    this.router.navigate(['/']).then();
    
     },(error) => {
    
    this.errorMsg=error;
    this.errorName=error.name;
    console.log('Error!!: '+this.errorMsg);
    
    
    
     }
     );


  }


 
  
 }

 public buttonClick():void{

  console.log("bt")
  if(this.data.amount==null){this.amountNull=true}
  if(this.data.description==null){this.descriptionNull=true}
  if(this.data.category==null){this.categoryNull=true}
  if(this.data.type==null){this.typeNull=true}
  if(this.data.date==null){this.dateNull=true}



 }

}

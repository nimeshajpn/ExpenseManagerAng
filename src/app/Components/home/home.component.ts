import { ExpenseServiceService } from './../../service/expense-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

NgForm
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public HomeService:ExpenseServiceService)
   { 
      HomeService.Data?.Amount

   }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule} from '@angular/forms';
import { AddComponent } from './Components/add/add.component';
import { ViewComponent } from './Components/view/view.component'

import { HttpClient, HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './Components/update/update.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ViewComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

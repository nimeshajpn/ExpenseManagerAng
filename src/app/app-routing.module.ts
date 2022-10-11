import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/add/add.component';
import { ViewComponent } from './Components/view/view.component';

const routes: Routes = [

  { path: '',redirectTo:'Home', pathMatch:'full' },
  { path: 'Home', component : HomeComponent},
  { path: 'Add', component : AddComponent},
  { path: 'View', component : ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

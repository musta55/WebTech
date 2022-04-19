import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormoutputComponent } from './formoutput/formoutput.component';

const routes: Routes = [
  {path:'',component: FormComponent},
  {path:'formoutput',component: FormoutputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

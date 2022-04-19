import { ShowInputsComponent } from './show-inputs/show-inputs.component';
import { TakeInputsComponent } from './take-inputs/take-inputs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutsComponent } from './checkouts/checkouts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'products',component: ProductListComponent},
  {path:'home',component: HomepageComponent},
  {path:'newproduct',component: NewproductComponent},
  {path:'update-product',component: UpdateProductComponent},
  {path:'checkouts',component: CheckoutsComponent},
  {path:'employee',component: TakeInputsComponent},
  {path:'view',component: ShowInputsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

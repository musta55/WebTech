import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { CheckoutsComponent } from './checkouts/checkouts.component';
import { ShowInputsComponent } from './show-inputs/show-inputs.component';
import { TakeInputsComponent } from './take-inputs/take-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProductListComponent,
    NewproductComponent,
    UpdateProductComponent,
    CheckoutsComponent,
    ShowInputsComponent,
    TakeInputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

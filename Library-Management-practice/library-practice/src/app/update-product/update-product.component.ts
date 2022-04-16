import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router) { }


  productToBeUpdated =new Product();
  ngOnInit(): void {
    this.productToBeUpdated =  JSON.parse(JSON.stringify(this.productService.getProductToBeUpdated()));
   }

   updateProduct() : void {
     this.productService.updateProduct(this.productToBeUpdated);
    this.router.navigate(['products'])
   }

   cancelUpdating() :void {
     this.router.navigate(['products']);
   }

}

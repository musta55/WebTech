import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  newProduct = new Product();
  constructor(private productService: ProductService, private router: Router) { }


  ngOnInit(): void {
  }
  addProduct(): void {
    console.log(this.newProduct);
    this.productService.addProduct(this.newProduct);
    this.router.navigate(['products']);
  }
}

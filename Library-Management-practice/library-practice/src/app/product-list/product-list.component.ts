import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  searchString: string = "";
  products: Product[] = [];

  ngOnInit(): void {
    console.log('init');
    this.products = this.productService.getProducts();
    console.log(this.productService.getProducts());
  }

  searchProduct(): void {
    if (this.searchString == "") {
      this.products = this.productService.getProducts();
    }
    else {
      this.products = this.products.filter(product => product.name.toLowerCase() == this.searchString.toLowerCase())
    }
    if (this.products.length == 0) alert("No book found");
  }

  sortProduct() :Product[]{
   return this.products.sort();
  }

  clearSearch(): void {
    this.searchString = "";
    this.products = this.productService.getProducts();
  }

  deleteProduct(givenProduct: Product): void {
    this.products = this.productService.deleteProduct(givenProduct);
  }
  wishProduct(givenProduct: Product): void {
   this.productService.wishProduct(givenProduct);
   alert("Product added to the wishlist")
  }
  
  addNewProduct(): void {
    this.router.navigate(['newproduct']);
  }

  updateProduct(givenProduct: Product, givenindex: number): void {
    this.productService.setProductToBeUpdated(givenProduct, givenindex);
    console.log('update button clicked')
    this.router.navigate(['update-product']);
  }

}

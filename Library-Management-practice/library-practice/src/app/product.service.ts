import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Keyboard', price: "$2000", available: false },
    { id: 2, name: 'Mouse', price: "$2500", available: false },
    { id: 3, name: 'Joystick', price: "$500", available: false },
    { id: 4, name: 'Chair', price: "$10000", available: false },

  ];

  wishList: Product[] = [
  
  ];
  productToBeUpdated: Product =new Product();
  // wishList: Product =new Product();
  productToBeUpdatedIndex: number = 0;
  constructor() { }
  getProducts():Product[] {
    return this.products;
  }
  getWishProducts():Product[] {
    return this.wishList;
  }


  addProduct(newProduct: Product):void {
    let id=Math.floor(Math.random()*10000+1);
    newProduct.id=id;
    this.products.push(newProduct);
    console.log(this.products);
  }

  deleteProduct(givenProduct:Product):Product[] {
    this.products=this.products.filter(product => product.id!=givenProduct.id);
    return this.products;
  }

  wishProduct(givenProduct:Product):void {
    this.wishList.push(givenProduct);
   
  }

  setProductToBeUpdated(givenProduct: Product,givenProductIndex: number):void {
    this.productToBeUpdated=givenProduct;
    this.productToBeUpdatedIndex=givenProductIndex;
  }

  getProductToBeUpdated():Product {
    return this.productToBeUpdated;
  }
   updateProduct(givenProduct: Product) {
     console.log(givenProduct.id);
     this.products.splice(this.productToBeUpdatedIndex,1,givenProduct);
     console.log(this.products);
   }


}

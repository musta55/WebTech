import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from '../detail.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.css']
})
export class CheckoutsComponent implements OnInit {

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
  }

  showWish = this.productService.getWishProducts();

}

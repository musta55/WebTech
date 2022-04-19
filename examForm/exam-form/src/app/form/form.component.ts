import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormserviceService } from '../formservice.service';

import { User } from '../User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newUser=new User();
  searchString: string = "";
  products: User[] = [];
  constructor(private formService: FormserviceService, private router: Router) { }


  ngOnInit(): void {
  }
  
  cancelForm(): void {
    this.searchString = "";
    this.products = this.formService.getProducts();
  }

  addUser(): void {
    console.log(this.newUser);
    this.formService.addUser(this.newUser);
    this.router.navigate(['formoutput']);
  }

}

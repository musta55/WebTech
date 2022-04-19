import { Injectable } from '@angular/core';
import { FormoutputComponent } from './formoutput/formoutput.component';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

 
  user: User[] = [
   
  ];
  userNew=new User();

  constructor(private formoutput:FormoutputComponent) { }
  getProducts():User[] {
    return this.user;
  }

  // setProductToBeUpdated(givenuser: User):void {
  //   this.productToBeUpdated=givenProduct;

  // }
  addUser(givenuser: User):void {
  
    console.log('service e :'+givenuser)
    this.userNew=givenuser;
  }
  getUser():User {
    return this.userNew;
  }

}



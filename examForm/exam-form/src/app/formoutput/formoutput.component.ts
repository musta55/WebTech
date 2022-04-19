import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormserviceService } from '../formservice.service';
import { User } from '../User';

@Component({
  selector: 'app-formoutput',
  templateUrl: './formoutput.component.html',
  styleUrls: ['./formoutput.component.css']
})
export class FormoutputComponent implements OnInit {

  newUser=this.formService.getUser();
  users: User[] = [];
  addUser(givenuser: User) {
    this.newUser=givenuser;
  }

  constructor(private formService: FormserviceService, private router: Router) { }

  ngOnInit(): void {
 
  }

}

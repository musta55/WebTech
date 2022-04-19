import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, take } from 'rxjs';
import { detail } from 'src/detail';

import { DetailService } from '../detail.service';

@Component({
  selector: 'app-take-inputs',
  templateUrl: './take-inputs.component.html',
  styleUrls: ['./take-inputs.component.css']
})
export class TakeInputsComponent implements OnInit {

  constructor(private detailService:DetailService, private route: Router) { }

  takeInput = new detail();
  searchString: string = "";
 


  ngOnInit(): void {
  }

  cancel():void {
    this.searchString = "";
    this.takeInput = this.detailService.getInputs();
 
  }

  submit(takeInput: detail){
    this.detailService.setInputs(takeInput);
    console.log(takeInput);
    this.route.navigate(['view'])
  }

}

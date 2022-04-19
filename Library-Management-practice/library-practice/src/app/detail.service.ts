import { Injectable } from '@angular/core';
import { detail } from 'src/detail';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor() { }

  setDetails = new detail();

  setInputs(details: detail){
    this.setDetails = details;
    console.log(this.setDetails);
  }

  getInputs(): detail{
    return this.setDetails;
  }
}

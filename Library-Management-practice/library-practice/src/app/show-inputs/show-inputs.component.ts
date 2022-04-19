import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-show-inputs',
  templateUrl: './show-inputs.component.html',
  styleUrls: ['./show-inputs.component.css']
})
export class ShowInputsComponent implements OnInit {

  constructor(private detailService: DetailService, private route: Router) { }

  ngOnInit(): void {
  }

  showDetails = this.detailService.getInputs();

  url="./assets/main.jpg";
}

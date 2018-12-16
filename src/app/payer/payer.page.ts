import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/models/event';

@Component({
  selector: 'app-payer',
  templateUrl: './payer.page.html',
  styleUrls: ['./payer.page.scss'],
})
export class PayerPage implements OnInit {

  placeResv : number = 0 ; 
  eventObj :any ; 

  constructor() { }

  ngOnInit() {
   
    this.eventObj = JSON.parse(localStorage.getItem("Payer")) ; 
    this.placeResv = JSON.parse(localStorage.getItem("nbPlace"));

    console.log(this.eventObj);
    console.log(this.placeResv);

  }

}

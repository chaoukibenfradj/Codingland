import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Event } from './../../models/event';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.page.html',
  styleUrls: ['./reservation-modal.page.scss'],
})
export class ReservationModalPage implements OnInit {

  placeResv : number = 0 ; 
  prixUnitaire : number = 15 ; 
  payType : any ; 

  @Input("event") event : any;

  eventObj :any ;
  constructor(private router:Router, private modalCtrl : ModalController) { }

  ngOnInit() {
    console.log(this.event);
    this.eventObj = JSON.parse(this.event);
  }
  plus(){
    this.placeResv ++ ; 
  }
  minis(){
    if(this.placeResv>0){
    this.placeResv-- ;
  }
  }

  gotoPayer(){

    localStorage.setItem("Payer", JSON.stringify(this.eventObj)) ; 
    localStorage.setItem("nbPlace", JSON.stringify(this.placeResv));
    this.modalCtrl.dismiss() ; 
    this.router.navigateByUrl("/Payer");

  }

  
  close(){
    this.modalCtrl.dismiss(); 
  }

}

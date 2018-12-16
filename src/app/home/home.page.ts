import { Event } from './../../models/event';
import { Client } from './../../models/user';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { element } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReservationModalPage } from '../reservation-modal/reservation-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private itemsCollection: AngularFirestoreCollection<Event>;
  public event2 = {} as Event;
  items : Observable<any[]>;
  constructor(private db : AngularFirestore, private router : Router, private modalController : ModalController){
    this.itemsCollection = db.collection<Event>('event');

    this.itemsCollection.valueChanges().subscribe(data=>{
      console.log(data);
      this.event2 = data[1] ; 
      console.log();
    });

  }

  async presentModal() {
    console.log(JSON.stringify(this.event2));
    const modal = await this.modalController.create({
      component: ReservationModalPage,
      componentProps: { event: JSON.stringify(this.event2) }, 
      animated : true, 
      cssClass : "modalClass"
    });
    return await modal.present();
  }



}

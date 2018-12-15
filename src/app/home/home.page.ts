import { Event } from './../../models/event';
import { Client } from './../../models/user';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private itemsCollection: AngularFirestoreCollection<Event>;

  items : Observable<any[]>;
  constructor(private db : AngularFirestore){
    // this.items = db.collection('users').valueChanges();
    
    // this.items.forEach(elem=>{
    //   console.log(elem);
      
    // });
    this.itemsCollection = db.collection<Event>('event');

    // var client = {} as Client ; 
    // client.UID = "tt"; 
    // client.email = "tt"; 
    // client.interestedEvents = [] ; 
    // client.nickname = "rr" ; 
    // client.nom = "tt" ; 
    // client.password="yy" ; 
    // client.prenom = "dd" ; 
    // client.profilPicURL="hh" ; 


    var event = {} as Event;
    event.description = "" ; 
    event.eventPic ="" ; 
    event.listComments = [] ; 
    event.nbTicketDispo = 50 ; 
    event.nomEvent = "" ; 
    event.posLang = 1 ; 
    event.posLat = 1 ; 
    
    this.itemsCollection.add(event).then(data=>{
      console.log(data);
    }).catch(err =>{
      console.log(err);
      
    });
    




  }

}

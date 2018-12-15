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


    // var subEvent = {} as Event;
    // subEvent.description = "" ; 
    // subEvent.eventPic ="" ; 
    // subEvent.listComments = [] ; 
    // subEvent.nbTicketDispo = 50 ; 
    // subEvent.nomEvent = "" ; 
    // subEvent.posLang = 1 ; 
    // subEvent.posLat = 1 ; 
    // subEvent.categ = "concert" ; 
    // subEvent.prixTicket = 0 ; 
    // subEvent.adressEvent = "" ; 
    // subEvent.adresseMailInfoline=""  ;
    // subEvent.infoline = "" ; 

    // var subEvent1 = {} as Event;
    // subEvent1.description = "" ; 
    // subEvent1.eventPic ="" ; 
    // subEvent1.listComments = [] ; 
    // subEvent1.nbTicketDispo = 50 ; 
    // subEvent1.nomEvent = "" ; 
    // subEvent1.posLang = 1 ; 
    // subEvent1.posLat = 1 ; 
    // subEvent1.categ = "concert" ; 
    // subEvent1.prixTicket = 0 ; 
    // subEvent1.adressEvent = "" ; 
    // subEvent1.adresseMailInfoline=""  ;
    // subEvent1.infoline = "" ; 


    // var event1 = {} as Event;
    // event1.description = "" ; 
    // event1.dateDebutFest = 0 ; 
    // event1.dateFinFest = 0 ; 
    // event1.eventPic ="" ; 
    // event1.listComments = [] ; 
    // event1.nbTicketDispo = 50 ; 
    // event1.nomEvent = "" ; 
    // event1.posLang = 1 ; 
    // event1.posLat = 1 ; 
    // event1.categ = "festival" ; 
    // event1.eventsFest = [] ; 
    // event1.adressEvent = "" ; 
    // event1.adresseMailInfoline=""  ;
    // event1.infoline = "" ;
    // event1.eventsFest.push(subEvent) ;
    // event1.eventsFest.push(subEvent1) ;
    
    // var event2 = {} as Event;
    // event2.description = "ee" ; 
    // event2.eventPic ="ee" ; 
    // event2.listComments = [] ; 
    // event2.nbTicketDispo = 50 ; 
    // event2.nomEvent = "Test" ; 
    // event2.posLang = 1 ; 
    // event2.posLat = 1 ; 
    // event2.categ = "concert" ; 
    // event2.prixTicket = 0 ; 
    // event2.adressEvent = "" ; 
    // event2.adresseMailInfoline=""  ;
    // event2.infoline = "" ;

    // console.log(event2);
    


    // this.itemsCollection.add(event1).then(data=>{
    //   console.log(data);
    // }).catch(err =>{
    //   console.log(err);
      
    // });
    
  }

}

import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/models/event';
import { Ticket } from 'src/models/ticket';

@Component({
  selector: 'app-payer',
  templateUrl: './payer.page.html',
  styleUrls: ['./payer.page.scss'],
})
export class PayerPage implements OnInit {

  placeResv : number = 0 ; 
  eventObj :any ; 
  private itemsCollection: AngularFirestoreCollection<Ticket>;
  items: Observable<Ticket[]>;


  constructor(private router : Router, private db : AngularFirestore) {
    this.itemsCollection = db.collection<Ticket>('ticket');
    this.items = this.itemsCollection.valueChanges();

   }

  ngOnInit() {
   
    this.eventObj = JSON.parse(localStorage.getItem("Payer")) ; 
    this.placeResv = JSON.parse(localStorage.getItem("nbPlace"));

    console.log(this.eventObj);
    console.log(this.placeResv);

  }

  gotoToPayer(){

    const dateNow = new Date().valueOf(); 
    const ticket ={} as Ticket ; 
    
    ticket.dateAchat = dateNow ; 
    ticket.event = this.eventObj ; 
    ticket.nbPlace = this.placeResv; 
    ticket.client = {}; 

    this.itemsCollection.add(ticket).then(data=>{
      
      localStorage.setItem("ticket", JSON.stringify(ticket));
      localStorage.setItem("ticketID", JSON.stringify(data.id));
      this.router.navigateByUrl("/Ticket");

    });




  }

}

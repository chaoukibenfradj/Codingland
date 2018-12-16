import { Ticket } from './../../models/ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  qrAPI :string = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" ;

  ticket = {} as Ticket; 
  ticketID : string; 

  constructor() { 

    this.ticket = JSON.parse(localStorage.getItem("ticket")) ; 

    this.ticketID = JSON.parse(localStorage.getItem("ticketID")) ;

    console.log(this.ticket);
    console.log(this.ticketID);
    
    this.qrAPI += this.ticketID ; 
  }

  ngOnInit() {
  
  }


}

import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/user';

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.page.html',
  styleUrls: ['./details-event.page.scss'],
})
export class DetailsEventPage implements OnInit {
event:any;
user = {} as Client ;
  constructor() { 
    let currentUser= JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser==null)
    {
      currentUser.email="aaa";
    }
    console.log(currentUser);
    this.user = currentUser ;
    
    this.event= JSON.parse(localStorage.getItem('event'));
    console.log("ahaya");
    console.log(this.event);
    
  }
  ngOnInit() {
  }

  dislike(i){
    console.log('dislike');
    this.event.status=0;
  }

  like(i){
   console.log('likelike');
   this.event.status=1;    
 }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../../serviceEvent/eventService';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../models/user';

@Component({
  selector: 'app-personalise-createur',
  templateUrl: './personalise-createur.page.html',
  styleUrls: ['./personalise-createur.page.scss'],
})
export class PersonaliseCreateurPage implements OnInit {

  event : Observable<any[]>;
  ctgr : string;
  listEvent : any[]=[];
  status: number;
  user = {} as Client ;
  
  constructor(private eventservice:EventService,private modalController : ModalController,private route: Router) { 
    
    this.event= this.eventservice.getAllEvent();
    const currentUser= JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.user = currentUser ;
    this.event.forEach(elem=>{
      elem.forEach(e=>{
        if(e.creerPar==this.user.email)
        {
          this.listEvent.push(e);
        }
        
      });
  });
}

eventpass(e){
  localStorage.setItem('event',JSON.stringify(e));
      this.route.navigateByUrl('/detailsEvent');
}
  ngOnInit() {
  }

}

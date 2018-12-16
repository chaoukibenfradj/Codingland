import { ActivatedRoute } from '@angular/router';
import { ReservationModalPage } from './../reservation-modal/reservation-modal.page';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../serviceEvent/eventService';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  event : Observable<any[]>;
  ctgr : string;
  listEvent : any[]=[];
  status: number;
  
  constructor(private eventservice:EventService,private modalController : ModalController,private route: ActivatedRoute) {

    this.ctgr = this.route.snapshot.paramMap.get('ctg');
    console.log(this.ctgr);
    this.event= this.eventservice.getAllEvent();
    this.event.forEach(elem=>{
      elem.forEach(e=>{
        e.status=0;
        
      });
      if(this.ctgr=="all")
      {
        this.listEvent=elem;
      }
      else
      {
        elem.forEach(e=>{
          if(e.categ==this.ctgr.toLocaleLowerCase())
          {
            this.listEvent.push(e);
          }
        });
      }
      

      // this.listEvent=elem;
      // console.log(elem);
    });
    this.listEvent.forEach(elem=>{
      
       this.listEvent=elem;
      console.log(elem);
      
      
     });
     
   }

  ngOnInit() {

   
     
  }

  dislike(i){
    console.log('dislike')
    this.status=0;
   this.listEvent.forEach(elem=>{
     if (elem==i){
       elem.status=0;
       console.log(elem); 
       console.log(elem.status); 
     }
    
   });
  
    
  }

  like(i){
   console.log('likelike');
   this.status=1;
   this.listEvent.forEach(elem=>{
     if (elem==i){
       elem.status=1;
       console.log(elem); 
       console.log(elem.status); 
     }
   });
 }

  async presentModal(e : Event) {
    const modal = await this.modalController.create({
      component: ReservationModalPage,
      componentProps: { event: JSON.stringify(e) }
    });
    return await modal.present();
  }
}


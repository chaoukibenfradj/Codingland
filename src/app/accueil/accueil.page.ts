import { ReservationModalPage } from './../reservation-modal/reservation-modal.page';
import { Component, OnInit ,ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { InfiniteScroll, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})

export class AccueilPage implements OnInit {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  private itemsCollection: AngularFirestoreCollection<Event>;
  showLoading : boolean = true ; 
  events=[];
  status:number=0;
  items : Observable<any[]>;
  constructor(private db : AngularFirestore, private route:Router, private modalController : ModalController) {
    var datenow=new Date().valueOf();
    var dateSemaine=new Date().valueOf()+604800000;
    console.log(dateSemaine);

    
    this.items = db.collection('event', ref => ref.where('dateEvent', '>=', datenow).where('dateEvent', '<=', dateSemaine)).valueChanges();
     
    this.items.forEach(elem=>{
      elem.forEach(e=>{
        e.status=0;
      });
       this.events=elem;
      console.log(elem);
      this.showLoading = false ;
      
     });
     this.events.forEach(elem=>{
      elem.status=0;
      console.log(elem.status);
      console.log(elem);
    });
     
    }
 
   ngOnInit() {
   }

   dislike(i){
    console.log('dislike')
    this.status=0;
   this.events.forEach(elem=>{
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
   this.events.forEach(elem=>{
     if (elem==i){
       elem.status=1;
       console.log(elem); 
       console.log(elem.status); 
     }
   
   });
    
 }

 loadData(event) {
  setTimeout(() => {
    console.log('Done');
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if ( this.events.length == 100) {
      event.target.disabled = true;
    }
  }, 500);
}

toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}

 async presentModal(e : Event) {
    const modal = await this.modalController.create({
      component: ReservationModalPage,
      componentProps: { event: JSON.stringify(e) }
    });
    return await modal.present();
  }

detail(i)
    {
      console.log(i);
      localStorage.setItem('event',JSON.stringify(i));
      this.route.navigateByUrl('/detailsEvent');
}


}


    
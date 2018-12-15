import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items : Observable<any[]>;
  constructor(private db : AngularFirestore){
    this.items = db.collection('users').valueChanges();
    this.items.forEach(elem=>{
      console.log(elem);
      
    });
  }

}

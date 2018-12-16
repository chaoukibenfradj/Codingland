import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Injectable()
export class EventService {

    private EventCollection: AngularFirestoreCollection<Event> = null;

    Event : Observable<any[]>;
    constructor(private db : AngularFirestore){
        this.EventCollection = db.collection<Event>('event');
    }

    getAllEvent()
    {
        return this.EventCollection.valueChanges();
    }





}

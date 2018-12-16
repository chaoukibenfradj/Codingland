import { Client } from './user';
import { Event } from './event';
export interface Ticket {
    client : Client ; 
    event : Event ; 
    nbPlace : number ; 
    dateAchat : number ; 
    
    
}
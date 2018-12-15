import { Event } from "./event";

export interface Client{

    email?: string ; 
    password?: string  ; 

    nom?: string ; 
    prenom?: string ;

    profilPicURL?: string  ; 

    UID? : string ; 

    nickname? : string  ; 

    interestedEvents?: Event[] ; 




}
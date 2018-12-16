import { Comment } from "./comment";

export interface Event{

    eventPic? : string; 
    description? : string ; 

    nomEvent ?: string  ; 
    posLang ? : number ; 
    posLat? : number ; 

    prixTicket?: number ; 

    dateEvent? : number ; 

    nbTicketDispo? : number ; 

    nbPersonInterest : number ;

    listComments? : Comment[];

    categ?: string; 

    dateDebutFest? : number ; 

    dateFinFest? : number ; 
    
    eventsFest?: Event[]; 

    adressEvent?: string; 
    
    infoline? : string ;

    adresseMailInfoline? : string  ;



}
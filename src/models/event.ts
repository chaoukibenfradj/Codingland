import { Comment } from "./comment";

export interface Event{

    eventPic? : string; 
    description? : string ; 

    nomEvent ?: string  ; 
    posLang ? : number ; 
    posLat? : number ; 

    nbTicketDispo? : number ; 

    listComments? : Comment[];



}
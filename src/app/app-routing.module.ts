import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayerPage } from './payer/payer.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'firstPage',
    pathMatch: 'full'
  },
  { path: 'firstPage', loadChildren: './first-page/first-page.module#FirstPagePageModule' },

  { path: 'Accueil', loadChildren: './accueil/accueil.module#AccueilPageModule'
 },
  { path: 'events/:ctg', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registre', loadChildren: './registre/registre.module#RegistrePageModule' },

  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'ReservationModal', loadChildren: './reservation-modal/reservation-modal.module#ReservationModalPageModule' },
  { path: 'Payer', component: PayerPage }, 
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'personaliseCreateur', loadChildren: './personalise-createur/personalise-createur.module#PersonaliseCreateurPageModule' },
  { path: 'detailsEvent', loadChildren: './details-event/details-event.module#DetailsEventPageModule' },
  { path: 'Ticket', loadChildren: './ticket/ticket.module#TicketPageModule' },
  { path: 'Logout', loadChildren: './logout/logout.module#LogoutPageModule' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

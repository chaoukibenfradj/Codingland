import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';
import { ReservationModalPage } from '../reservation-modal/reservation-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  }
];

@NgModule({
  entryComponents:[ReservationModalPage] ,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventsPage, ReservationModalPage]
})
export class EventsPageModule {}

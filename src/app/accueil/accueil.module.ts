import { ReservationModalPage } from './../reservation-modal/reservation-modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage
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
  declarations: [AccueilPage, ReservationModalPage]
})
export class AccueilPageModule {}

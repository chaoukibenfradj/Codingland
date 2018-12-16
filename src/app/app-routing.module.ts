import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayerPage } from './payer/payer.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'ReservationModal', loadChildren: './reservation-modal/reservation-modal.module#ReservationModalPageModule' },
  { path: 'Payer', component: PayerPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

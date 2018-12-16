import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonaliseCreateurPage } from './personalise-createur.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaliseCreateurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonaliseCreateurPage]
})
export class PersonaliseCreateurPageModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin()
  {
    this.router.navigateByUrl('login');
  }
  goToInscrit()
  {
    this.router.navigateByUrl('registre');
  }

  goHome()
  {
    this.router.navigateByUrl('Accueil');
  }

}

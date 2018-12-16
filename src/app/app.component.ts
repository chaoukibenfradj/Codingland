import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/Accueil',
      icon: 'home'
    },
    {
      title: 'Evenement',
      url: '/events/all',
      icon: 'calendar'
    },
    {
      title: 'Sport',
      url: '/events/Sport',
      icon: 'football'
    },
    {
      title: 'Concert',
      url: '/events/Concert',
      icon: 'musical-notes'
    },
    {
      title: 'Théâtre',
      url: '/events/Theatre',
      icon: 'easel'
    }, 
    {
      title: 'Mes Evenement',
      url : '/personaliseCreateur', 
      icon :'calendar'
    }, 
    {
      title: 'Se déconnecter',
      url : '/Logout', 
      icon :'exit'

    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

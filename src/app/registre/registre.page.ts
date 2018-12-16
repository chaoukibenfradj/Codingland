import { Component, OnInit, ViewChild } from '@angular/core';
import { Credentials } from '../../models/credentials.model';
import { Client } from '../../models/user';
import { ToastController, Slides } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {
  
  @ViewChild(Slides) signupSlider: Slides;
  isSignedUp = false;
  user = {} as Client ;
    credentials = {} as Credentials;
    private userCollection: AngularFirestoreCollection<Client>;
    passwordConfirmation: string;

  constructor(private router: Router,private toastCtrl: ToastController,afs: AngularFirestore,private splashScreen: SplashScreen,private afauth : AngularFireAuth,) { 
    this.userCollection = afs.collection<Client>('client');
  }

  ngOnInit() {
  }

  selectUserType(n: number) {
    switch (n) {
        case 1: {
            this.user.userType = "createur";
            break;
        }
        case 2: {
            this.user.userType = "Client";
            break;
        }
        
    }
    this.nextSlide();
}

ionViewDidLoad() {
  this.signupSlider.lockSwipes(true);
}

slideChanged() {

}

nextSlide() {
  this.signupSlider.lockSwipes(false);
  this.signupSlider.slideNext();
  this.signupSlider.lockSwipes(true);
}

Signup() {
  let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (this.user.nom && this.user.nom.trim().length > 0 &&
      this.user.prenom && this.user.prenom.trim().length > 0 &&
      this.credentials.email && this.credentials.email.trim().length > 0 && emailRegEx.test(String(this.credentials.email).toLocaleLowerCase()) &&
      this.credentials.password && this.credentials.password.trim().length > 0 &&
      this.passwordConfirmation && this.passwordConfirmation.trim().length > 0 &&
      this.credentials.password === this.passwordConfirmation) {
      
      if (this.credentials.password.trim().length >= 6) {
          //this.nextSlide();
          this.user.email=this.credentials.email;
          this.user.password=this.credentials.password;
          try
          {
            const result= this.afauth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password);
            this.userCollection.add(this.user);
            localStorage.setItem('currentUser',JSON.stringify(this.user));
            console.log(result)
            this.router.navigateByUrl('Accueil');
          }
          catch(e){
            console.error(e);
          }
      } else {
          let toast = this.toastCtrl.create({
              message: 'Votre mot de passe doit contenir 6 caractéres au minimum!',
              duration: 3000,
              position: 'top'
          }).then(e=>{
            e.present();
          });
          return;
      }
      
  } else {
      return;
  }
}

}

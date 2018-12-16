import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials.model';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Client } from '../../models/user';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  rsl : Observable<any>
  user = {} as Client ;
  credentials: Credentials = new Credentials();
  private userCollection: AngularFirestoreCollection<Client>;
  constructor(
    private afs: AngularFirestore,private splashScreen: SplashScreen,private afauth : AngularFireAuth,private router: Router) { 
      this.userCollection = afs.collection<Client>('client');
    }


// async register(user:Client)
// {
//   try
//   {
//     const result= await this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password);
//     this.userCollection.add(user);
//     localStorage.setItem('currentUser',JSON.stringify(user));
//     console.log(result)
//     this.router.navigateByUrl('/');
//   }
//   catch(e){
//     console.error(e);
//   }
 
// }

login()
{
  try
  {
    const result=this.afauth.auth.signInWithEmailAndPassword(this.credentials.email,this.credentials.password);
    console.log(result);
    if(result)
    {

      this.rsl = this.afs.collection('client', ref => ref.where('email', '==', this.credentials.email)).valueChanges();
      this.rsl.subscribe(e=>{
        
        console.error(e[0]);
        localStorage.setItem('currentUser',JSON.stringify(e[0]));
        this.router.navigateByUrl('Accueil');
      })
      // console.error(this.rsl);
      // localStorage.setItem('currentUser',JSON.stringify(this.rsl));
      // this.router.navigateByUrl('home');
    }
  }
  catch(e)
  {
    console.error(e);
  }
}

navigate()
{
  this.router.navigateByUrl('registre');
}
//   login() {

//     let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (this.credentials.email && this.credentials.email.trim().length > 0 && emailRegEx.test(String(this.credentials.email).toLocaleLowerCase()) && this.credentials.password && this.credentials.password.trim().length > 0) {

//         this.splashScreen.show();

//         this.authenticationService.signInWithEmailAndPassword(this.credentials).then(
//             (result) => {
//                 this.userService.getUserByUid(result.uid).subscribe(
//                     (response) => {
//                         this.storage.set('currentUser', response);
//                         switch (response.userType) {
//                             case STUDENT: {
//                                 this.goToHomePage('StudentHomePage');
//                                 break;
//                             }
//                             case CLUB: {
//                                 this.clubService.getClubByAdminUid(response.uid).subscribe(
//                                     (response) => {
//                                         this.storage.set('currentClub', response[0]);
//                                         this.goToHomePage('ClubProfilePage');
//                                     },
//                                     (error) => {
//                                         this.splashScreen.hide();
//                                         console.log(error);
//                                     }
//                                 );
//                                 break;
//                             }
//                             case CAFETERIA: {
//                                 this.goToHomePage('CafeteriaHomePage');
//                                 break;
//                             }
//                             case CANTEEN: {
//                                 this.goToHomePage('CanteenHomePage');
//                                 break;
//                             }
//                         }
//                     },
//                     (error) => {
//                         this.splashScreen.hide();
//                         console.log(error);
//                     }
//                 );
//             },
//             (error) => {
//                 this.splashScreen.hide();
//                 console.log(error);
//                 switch (error.code) {
//                     case 'auth/user-not-found': {
//                         let toast = this.toastCtrl.create({
//                             message: 'Vous devez créer un compte d\'abord!',
//                             duration: 3000,
//                             position: 'top'
//                         });
//                         toast.present();
//                         break;
//                     }
//                     case 'auth/wrong-password': {
//                         let toast = this.toastCtrl.create({
//                             message: 'Email ou mot de passe incorrecte!',
//                             duration: 3000,
//                             position: 'top'
//                         });
//                         toast.present();
//                         break;
//                     }
//                 }
//             }
//         );

//     } else {
//         return;
//     }

// }nInit() {
//   }

}

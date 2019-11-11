import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';
import { User } from './user/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: User;
  constructor(private angularFireAuthentication: AngularFireAuth, private router: Router) {}

signup(user: User) {
  console.log('login func in auth service received', user);
  return new Promise((resolve, reject) => {
      this.angularFireAuthentication.auth
        .createUserWithEmailAndPassword(user.email, user.password)
          .then(
              result => {resolve(result); console.log('User is signed up!!', this.angularFireAuthentication.auth.currentUser);},
              error => reject(error)
          );
  });
}


login(user: User ) {
  console.log('login func in auth service received', user);
  return new Promise((resolve, reject) => {
        this.angularFireAuthentication.auth
            .signInWithEmailAndPassword(user.email, user.password)
            .then(
                result => {resolve(result);
                           this.router.initialNavigation();
                           this.router.navigate(['/scan']);
                },
                error => reject(error)
            );
    });
}

logout(user: User ) {
  console.log('logout func in auth service received', user);
  return new Promise((resolve, reject) => {
        this.angularFireAuthentication.auth
            .signOut()
            .then(
                result => {resolve(result);
                           this.router.initialNavigation();
                           this.router.navigate(['/login']);
                },
                error => reject(error)
            );
    });
}


}







// logout(user: User) {
//   console.log('signUp func in auth service received', user);
//   return new Promise((resolve, reject) => {
//     this.angularFireAuthentication.auth.signOut();
//     console.log('Logget out user', user);
// }
// }

// logout() {
//     return new Promise((resolve, reject) => {
//         if (this.user.isUserLoggedIn()) {
//             this._angularFireAuthentication.auth.signOut();
//             resolve();
//         }
//         else {
//             reject();
//         }
//     });
// }


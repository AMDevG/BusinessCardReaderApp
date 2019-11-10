import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from './user/user.model';
import { resolve } from 'url';
import { reject } from 'q';

// import { Credentials } from 'firebase/models';


@Injectable()
export class AuthService {
  user: User;
  constructor(private angularFireAuthentication: AngularFireAuth) {
}

signup(user: User) {
  console.log('login func in auth service received', user);
  return new Promise((resolve, reject) => {
      this.angularFireAuthentication.auth
        .createUserWithEmailAndPassword(user.email, user.password)
          .then(
              result => {resolve(result); console.log("User is signed up!!", this.angularFireAuthentication.auth.currentUser);},
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
                result => {resolve(result); console.log("User is logged in!", this.angularFireAuthentication.auth.currentUser);},
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


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from './user/user.model';

// import { Credentials } from 'firebase/models';


@Injectable()
export class AuthService {
  user: User;
  constructor(private angularFireAuthentication: AngularFireAuth) {
}

login(credentials: User ) {
    return new Promise((resolve, reject) => {
        this.angularFireAuthentication.auth
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(
                result => resolve(result),
                error => reject(error)
            );
    });
}
}

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


import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import * as firebase from 'firebase/app';
// import * as admin from 'firebase-admin';
import { User } from './user/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
// import { FIRE_ADMIN } from '../app/app.module';

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: 'https://buseinesscardreader.firebaseio.com',
// });

@Injectable()
export class AuthService implements CanActivate {

    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    private userID: string;

    constructor(public angularFireAuthentication: AngularFireAuth, private router: Router) {
        this.user = angularFireAuthentication.authState;
        console.log('Constructed user Observable');
        this.user.subscribe(
            (user) => {
              console.log('Subscribed to user!');
              if (user) {
                    this.userDetails = user;
                } else {
                    this.userDetails = null;
                }
            }
        );
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.isAuthenticated()) {
        this.router.navigate(['/login']);
        }
        return this.isAuthenticated();
    }

    isAuthenticated(): boolean {
        if (this.angularFireAuthentication.auth.currentUser === null) {
            console.log('User is not authenticated');
            return false;
        }
        this.userID = this.userDetails.uid;
        return true;
    }

    isLoggedIn() {
        if (this.userDetails === null) {
            return false;
        } else {
            return true;
        }
    }

    // getCurrentUser(): Promise<string> {
    //     return this.userDetails.getIdToken();
    // }

    getCurrentUserID(): string {
      return this.userID;
}
    logout() {
        this.angularFireAuthentication.auth.signOut()
        .then((res) => this.router.navigate(['/login']));
    }

    login(email: string, password: string) {
    return new Promise((resolve, reject) => {
            this.angularFireAuthentication.auth
                .signInWithEmailAndPassword(email, password)
                .then(
                    result => {resolve(result);
                               this.router.initialNavigation();
                               this.router.navigate(['/dash']);
                    },
                    error => {
                        return reject(error);
                    }
                );
        });
    }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private user: firebase.User;
    authSubscription: any;

    constructor(private angularFireAuthentication: AngularFireAuth, private router: Router) {

      this.authSubscription = this.angularFireAuthentication.authState.subscribe( user => {
          if (user) {
            this.user = user;
            sessionStorage.setItem('cur-user', JSON.stringify(this.user.uid));
          } else {
            sessionStorage.setItem('cur-user', null);
          }
        });
    }

    get isAuthenticated(): boolean {
        const user = JSON.parse(sessionStorage.getItem('cur-user'));
        return user !== null;
    }
    async logout() {
        await this.angularFireAuthentication.auth.signOut();
        sessionStorage.removeItem('cur-user');
        this.authSubscription.unsubscribe();
        this.router.navigate(['login']);
    }

    async login(email: string, password: string) {
      try {
        await this.angularFireAuthentication.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['dash']);
        } catch (error) {
            sessionStorage.removeItem('cur-user');
            this.router.navigate(['login']);
        }
    }
  }

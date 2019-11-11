import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AngularFireAuth) {}

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let loggedIn: boolean;
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
          console.log('Can Activate returned true!');
          loggedIn = true;
        } else {
          console.log('Can Activate returned false!');
          loggedIn = false;
          this.router.navigate(['/login']);
          }
      return loggedIn;
    }
}

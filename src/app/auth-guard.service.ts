import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AngularFireAuth) {}

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      var loggedIn: boolean;
      var currentUser = firebase.auth().currentUser;
      // firebase.auth().onAuthStateChanged(function(user) {
      if (currentUser) {
          console.log('Can Activate returned true!');
          loggedIn = true;
        } else {
          console.log('Can Activate returned false!');
          loggedIn = false;
          this.router.navigate(['/login']);
          }
      // });
      return loggedIn;
    }

// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//   return this.authService.user.pipe(
//     take(1),
//     map((user) => !!user),
//     tap((loggedIn) => {
//       if (!loggedIn) {
//         console.log('access denied');
//         this.router.navigate(['/login']);
//       }
//     }),
//   );
// }
}

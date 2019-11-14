import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    loggedInSubject: BehaviorSubject<boolean>;
    userAuthenticated = false;

    constructor(private router: Router, private authService: AngularFireAuth) {
        this.loggedInSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
    }

    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Here you should check if your user is logged in then return true, else return false and redirect him to login page
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    return this.isAuthenticated();
  }

    // canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //   let loggedIn: boolean;
    //   const currentUser = firebase.auth().currentUser;
      
    //   if (currentUser) {
    //       console.log('Can Activate returned true!');
    //       loggedIn = true;
    //     } else {
    //       console.log('Can Activate returned false!');
    //       loggedIn = false;
    //       this.router.navigate(['/login']);
    //       }
    //   return loggedIn;
    // }
    
  isAuthenticated(): boolean {
    // EXAMPLE: Call your API and check if the user is authenticated
    // return this.userApi.isAuthenticated();
    if(this.authService.auth.currentUser === null){
        console.log("User is not authenticated");
        return false;
    }
    return true;
  }

}

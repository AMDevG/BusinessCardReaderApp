import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements CanActivate {

    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    private userID: string;

    constructor(public angularFireAuthentication: AngularFireAuth, private router: Router) {
        this.user = angularFireAuthentication.authState;
        this.user.subscribe(
            (user) => {
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

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../auth.service';

import { Router} from '@angular/router';
import { UsersService } from '../../user/users.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  user: User;
  @Input() redirectUrl: string;
  @Output() success = new EventEmitter();

  constructor(public authService: AuthService, private router: Router,public fb: FormBuilder) {
    this.loginForm = fb.group({
        email: new FormControl('', Validators.compose([
          Validators.email,
          Validators.required
        ])),
        password: new FormControl('', Validators.required)
      });
  }

    onSubmit(): void {
        this.doSignin(this.loginForm.value.email, this.loginForm.value.password);
    }

    doSignin(email: string, password: string): void {
        console.log('Signing in: ', email);
        this.authService.login(email, password)
        .then( res => {
            this.success.emit(true);
            this.loginForm.reset();
            if (this.redirectUrl) {
              setTimeout(() => {
                return this.router.navigate([this.redirectUrl]);
              }, 500);
            }
          },
          err => {
            this.success.emit(false);
          }
        );
      }
}

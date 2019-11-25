import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../auth.service';

import { Router} from '@angular/router';
import { User } from '../../user/user.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  loginForm: FormGroup;
  user: User;

  @Output()
  // tslint:disable-next-line: variable-name
  private _success = new EventEmitter();
  public get success() {
    return this._success;
  }
  public set success(value) {
    this._success = value;
  }

  constructor(public authService: AuthService, private router: Router,
              public fb: FormBuilder, private titleService: Title) {
    this.loginForm = fb.group({
        email: new FormControl('', Validators.compose([
          Validators.email,
          Validators.required
        ])),
        password: new FormControl('', Validators.required)
      });
    this.titleService.setTitle(this.title);
  }

    onSubmit(): void {
        this.doSignin(this.loginForm.value.email, this.loginForm.value.password);
    }

    doSignin(email: string, password: string): void {
        this.authService.login(email, password);
      }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { Router} from '@angular/router';
import { UsersService } from '../user/users.service';
import { User } from '../user/user.model'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  // errorMessage: string;

  // emailaddress = '';
  // password = '';

  constructor(public authService: AuthService, private usersService: UsersService, private router: Router,
              private fb: FormBuilder) {
      this.createForm();
  }

    createForm() {
      this.loginForm = this.fb.group({
        email:  ['', [Validators.required, Validators.email]],
        password:  ['', [Validators.required, Validators.required]]
      });
    }
    onSubmit(value: any){
      this.user = new User(value.email, value.password);
      this.usersService.setCurrentUser(this.user);
      this.authService.login(this.user);
    }

    signup(value: any){
      this.authService.signup(this.user);
    }

  ngOnInit() {
  }

}

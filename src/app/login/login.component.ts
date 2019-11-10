import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  emailaddress = '';
  password = '';

  constructor(public authService: AuthService, private router: Router,
              private fb: FormBuilder) {
                this.createForm();
  }

    createForm() {
      this.loginForm = this.fb.group({
        email:  ['', Validators.required],
        password:  ['', Validators.required]
      });
    }
    onSubmit(){
      console.log("Onsubmit was pushed!");
      //Call Auth Service Functions Here;
    }
  ngOnInit() {
  }

}

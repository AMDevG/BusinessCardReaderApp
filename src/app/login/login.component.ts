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
  // errorMessage: string;

  // emailaddress = '';
  // password = '';

  constructor(public authService: AuthService, private router: Router,
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
      console.log("Onsubmit received: ", value.email);
      console.log("Onsubmit received: ", value.password);
      //Call Auth Service Functions Here;
    }
  ngOnInit() {
  }

}

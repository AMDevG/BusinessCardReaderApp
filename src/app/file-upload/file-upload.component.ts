import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { UsersService } from '../user/users.service';
import { Router} from '@angular/router';
import { UploadService } from '../upload.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  uploadForm: FormGroup;
  base64EncodedImage: string;
  uploadedImgURL: string;

  constructor(public authService: AuthService, private usersService: UsersService,
              private uploadService: UploadService, private router: Router,
              private fb: FormBuilder) {  this.createForm();  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    // this.uploadService.filePathUri = value.uploadedImgURL;
    // this.uploadService.firstName = value.firstNameInput;
    this.uploadService.createNewBusinessCard();
  }

  createForm() {
    this.uploadForm = this.fb.group({
      firstNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      lastNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      companyInput: ['', [Validators.required, Validators.minLength(3)]],
      emailInput:  ['', [Validators.required, Validators.email]],
      phoneInput: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

}

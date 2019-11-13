import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BusinessCard } from './business-card';
import { BusinessCardService } from './business-card.service';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  base64Img: string;
  filePathUri: string;
  userId: string;
  uploadForm: FormGroup;

  constructor(private authService: AuthService, private fireAuthService: AngularFireAuth, private fb: FormBuilder) { }

  createForm() {
    this.uploadForm = this.fb.group({
      firstNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      lastNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      companyInput: ['', [Validators.required, Validators.minLength(3)]],
      emailInput:  ['', [Validators.required, Validators.email]],
      phoneInput: ['', [Validators.required, Validators.minLength(3)]]
    });
    return FormGroup;
  }
uploadToStorage(businessCard: BusinessCard) {
  // const API_ENDPIOINT = 'https://buseinesscardreader-4e06a-carddb.firebaseio.com/';
  // const ref = firebase.storage().ref();
  // console.log('Storage ref is ${ref}');
  // console.log('Uplading bcard ID: ', businessCard.userId);
  // var imgUri = '[IMGURI]';
  // ref.putString('id', 'base64').then(function(snapshot) {
  // console.log('Uploaded a Full Card minus ID', businessCard);
}

  // NEED TO CALL FIREDATABASE UPLOAD TO COLLECTIONS; ATTACHED TO USERID & ADD IMGURI + BASE64; 
  // RETURN SUCCESS; NO IMG CARD ON NGIF, CLEAR SCREAN OF CAPTURE;
}


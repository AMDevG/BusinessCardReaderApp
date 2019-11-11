import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from 'express';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  base64Img: string;
  filePathUri: string;
  userId: string;
  // uploadPath: string;
  // fileName: string;

  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;

  // constructor(private authService: AuthService, private fireAuthService: AngularFireAuth, private router: Router) { }

  constructor() {}

  createNewBusinessCard() {
    console.log('Here is a mock Business Card Object in Upload Service:');
    console.log('Img Uri: http://test.com');
    console.log('First Name: Dave');
    console.log('Last Name: Chester');
    console.log('Company: Chester Advisors, LLC.');
    console.log('Email: ChesterCEO@gmail.com');
    console.log('Phone: 3124008976');
  }

uploadToStorage() {
  // const storageRef = firebase.storage().ref();
  // console.log('Storage ref is ${storageRef}');
}
}

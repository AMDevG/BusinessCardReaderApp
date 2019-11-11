import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BusinessCard } from './business-card';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  base64Img: string;
  filePathUri: string;
  userId: string;
  // uploadPath: string;
  // fileName: string;

  constructor(private authService: AuthService, private fireAuthService: AngularFireAuth) { }

uploadToStorage(businessCard: BusinessCard) {
  // const storageRef = firebase.storage().ref();
  // console.log('Storage ref is ${storageRef}');
  console.log('Uplading bcard: ', businessCard.companyName);

  // NEED TO CALL FIREDATABASE UPLOAD TO COLLECTIONS; ATTACHED TO USERID & ADD IMGURI + BASE64; 
  // RETURN SUCCESS; NO IMG CARD ON NGIF, CLEAR SCREAN OF CAPTURE;
}
}

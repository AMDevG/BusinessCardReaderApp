import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BusinessCard } from './business-card';
import { BusinessCardService } from './business-card.service';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  base64Img: string;
  filePathUri: string;
  userId: string;
  uploadForm: FormGroup;
  collString: string;
  usersRef: AngularFirestoreCollection<string>;

  constructor(private authService: AuthService, private firestore: AngularFirestore,
              private fireAuthService: AngularFireAuth, private fb: FormBuilder) {
                this.usersRef = this.firestore.collection<string>('users');
    // const storageRef = firestore.collection('/users');
  }
  uploadImage(base64: string, imageUri: string) {
    this.userId = this.authService.getCurrentUserID();
    const base64Obj = {
      base64
    };

    if (base64 !== null ) {
      // this.firestore.collection('users/kKANbY9qhzYkIMWFWVWHm5QqsYu1/images');
      return new Promise<any>((resolve, reject) =>{
        // this.usersCollection
        this.firestore.collection('users/kKANbY9qhzYkIMWFWVWHm5QqsYu1/images')
          .add(base64Obj)
          .then(res => {console.log('Successul upload!'); }, err => reject(err));
    });

    } else {
      console.log('Didnt receive base64');
    }

  }
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
}




  // uploadToStorage(businessCard: BusinessCard) {
  // const API_ENDPIOINT = 'https://buseinesscardreader-4e06a-carddb.firebaseio.com/';
  // const ref = firebase.storage().ref();
  // console.log('Storage ref is ${ref}');
  // console.log('Uplading bcard ID: ', businessCard.userId);
  // var imgUri = '[IMGURI]';
  // ref.putString('id', 'base64').then(function(snapshot) {
  // console.log('Uploaded a Full Card minus ID', businessCard);
// }

  // NEED TO CALL FIREDATABASE UPLOAD TO COLLECTIONS; ATTACHED TO USERID & ADD IMGURI + BASE64;
  // RETURN SUCCESS; NO IMG CARD ON NGIF, CLEAR SCREAN OF CAPTURE


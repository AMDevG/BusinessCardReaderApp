import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BusinessCard } from './business-card';
import { BusinessCardService } from './business-card.service';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VisionService } from './vision.service';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  imgUID: number;
  base64Img: string;
  filePathUri: string;
  userId: string;
  images: Observable<any[]>;
  // uploadForm: FormGroup;
  usersRef: AngularFirestoreCollection<string>;
  currentCollection: AngularFirestoreCollection;

  constructor(private authService: AuthService, private firestore: AngularFirestore,
              private fireAuthService: AngularFireAuth, private visionService: VisionService,
              private fb: FormBuilder) { }

/* TEST CODE FOR UPDATING BASED ON DOCREF ID **************** */
  getImageIDs() {
    // let doc = this.firestore.collection(`users/${this.userId}/images`, ref => ref.where('id', '==', id));
    this.currentCollection = this.firestore.collection(`users/${this.userId}/images`);
    this.images = this.currentCollection.snapshotChanges().pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log('Retrieved id: ', id);
        return { id, ...data };
      });
    }));
  }

  // PATH TO THE IMAGES /users/[UID]/images/[IMAGEAUTO-ID] - BASE64 ATTR. AND DATAURL
  /*  *********************************************************  */
  uploadImage(base64: string, imageUri: string) {
    // console.log('Calling get image for id of doc following upload;');
    // this.getImageIDs();
    this.userId = this.authService.getCurrentUserID();

    if (base64 !== null ) {
      return new Promise<any>((resolve, reject) => {
        this.firestore.collection(`users/${this.userId}/images`).doc('test4vision').set({
          base64str: `${base64}`,
          dataUrlStr: `${imageUri}`
        }).then(res => {
            console.log('Successfully added document! Calling Vision API');
            this.visionService.createRequest(base64);
        }, err => reject(err));
      });
    } else {
      console.log('Error uploading');
    }
  }
  }

  // createForm() {
  //   this.uploadForm = this.fb.group({
  //     firstNameInput:  ['', [Validators.required, Validators.minLength(3)]],
  //     lastNameInput:  ['', [Validators.required, Validators.minLength(3)]],
  //     companyInput: ['', [Validators.required, Validators.minLength(3)]],
  //     emailInput:  ['', [Validators.required, Validators.email]],
  //     phoneInput: ['', [Validators.required, Validators.minLength(3)]]
  //   });
  //   return FormGroup;
  // }



    // doc.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data();
    //     const id = a.payload.doc.id;
    //     console.log('snapshot changes called in update');
    //     console.log(`Doc ID: ${id}`);
    //     return { id, ...data };
    //   }))).subscribe((_doc: any) => {
    //    let docId = _doc[0].payload.doc.id; //first result of query [0]
    //    console.log(`Doc ID in subscription is" ${docId}`);
    //    this.firestore.doc(`users/${this.userId}/images`).update({base64str: value});
    //   });


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


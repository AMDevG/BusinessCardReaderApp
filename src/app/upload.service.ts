import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BusinessCard } from './business-card';
import { BusinessCardService } from './business-card.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
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
  annotations = [];
  usersRef: AngularFirestoreCollection<string>;
  currentCollection: AngularFirestoreCollection;

  constructor(private authService: AuthService, private firestore: AngularFirestore,
              private visionService: VisionService) { }

/* ADD FUNCTIONAL: DO NOT UPLOAD UNTIL FORM HAS BEEN RENDERED AND EDITED
   SPLIT INTO TWO FUNCTIONS EXTRACT TEXT -> FILL IN FORM -> DISPLAY IMAGE + FORM (USER EDIT TEXT)
   -> UPLOAD AND SAVE;

   -- RENDER INTO MY DASHBOARD:
      - LISTEN FOR ANY CHANGES TO COLLECTION -> SNAPSHOT CHANGES

*/
  uploadImage(base64: string, imageUri: string) {
    this.userId = this.authService.getCurrentUserID();
    if (base64 !== null ) {
        return new Promise<any>((resolve, reject) => {
          this.firestore.collection(`users/${this.userId}/images`).doc('testCard1').set({
            base64str: `${base64}`,
            dataUrlStr: `${imageUri}`
          }).then(res => {
              this.visionService.createRequest(base64);
              this.uploadAnnotations();
          }, err => reject(err));
        });
      } else {
        console.log('Error uploading');
      }
    }

  uploadAnnotations() {
    this.annotations = this.visionService.getAnnotationsArray();
    this.annotations.forEach(element => {
      console.log('Upload Service received ', element);
    });
  }
}

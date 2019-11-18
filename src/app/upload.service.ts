import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BusinessCard } from './business-card';
import { BusinessCardService } from './business-card.service';
import { FormBuilder} from '@angular/forms';
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
  usersRef: AngularFirestoreCollection<string>;
  currentCollection: AngularFirestoreCollection;

  constructor(private authService: AuthService, private firestore: AngularFirestore,
              private visionService: VisionService) { }

  uploadImage(base64: string, imageUri: string) {
    this.userId = this.authService.getCurrentUserID();
    if (base64 !== null ) {
        return new Promise<any>((resolve, reject) => {
          this.firestore.collection(`users/${this.userId}/images`).doc('testCard1').set({
            base64str: `${base64}`,
            dataUrlStr: `${imageUri}`
          }).then(res => {
              this.visionService.createRequest(base64);
          }, err => reject(err));
        });
      } else {
        console.log('Error uploading');
      }
    }
}

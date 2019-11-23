import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
// import { BusinessCardComponent } from '../app/components/business-card/business-card.component';
import { BusinessCard } from '../app/business-card';
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
  annotations: any[];
  usersRef: AngularFirestoreCollection<string>;
  currentCollection: AngularFirestoreCollection;
  newCard: BusinessCard;

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
          }).then(async res => {
              await this.visionService.executeRequest(base64);
              console.log('Vision Service Returned; 200;');
              this.annotations = this.visionService.getAnnotationsArray();
              console.log('Annots in Upload Service:', this.annotations);
              this.newCard = new BusinessCard(this.annotations);

              // MOVE BUSINESS CARD CREATION OUT ---
              // CALL PROCESSOR TO DISTINGUISH NAME; PHONE EMAIL, ETC FROM
              // UNORDERED ARRAY OF TEXT
              // this.newCard = new BusinessCard(this.annotations[0], this.annotations[1],
                                              // this.annotations[2], this.annotations[3], this.annotations[4]);

              // console.log('Created new Card!');

          }, err => reject(err));
        });
      } else {
        console.log('Error uploading');
      }
    }

    getBusinessCard() {
      return this.newCard;
    }

  // getAnnotations() {
  //   this.annotations = this.visionService.getAnnotationsArray();
  //   this.annotations.forEach(element => {
  //     console.log('Element: ', element);
  //   });
  //   return this.annotations;
  // }

}

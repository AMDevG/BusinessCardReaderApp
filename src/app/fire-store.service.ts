import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
// import { BusinessCardComponent } from '../app/components/business-card/business-card.component';
import { BusinessCard } from './business-card';
import { BusinessCardService } from './business-card.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { VisionService } from './vision.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  doneProcessing = false;
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
    this.doneProcessing = false;
    this.userId = this.authService.getCurrentUserID();
    if (base64 !== null ) {
        return new Promise<any>((resolve, reject) => {
          this.firestore.collection(`users/${this.userId}/images`).doc('testCard1').set({
            base64str: `${base64}`,
            dataUrlStr: `${imageUri}`
          }).then(async res => {
              console.log('Uploaded base64 to user profile, calling API');
              await this.visionService.executeRequest(base64);
              console.log('API RETURNED');
          }, err => reject(err))
          .then(res => {
            this.annotations = this.visionService.getAnnotationsArray();
            console.log('Annots in FireStore Service:', this.annotations);
            this.newCard = new BusinessCard();
            this.newCard.populateFields(this.annotations);
            // console.log('populated fields called on new Card');
          });
        });
      } else {
        console.log('Error uploading');
      }
    }

    getBusinessCard() {
      console.log('Returning new card: ');
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

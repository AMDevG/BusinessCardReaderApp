import { uuid } from './util/uuid';
import { VisionService } from './vision.service';
import { Optional, Injectable, OnInit } from '@angular/core';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessCard {
    // ADD PASS DOC ID ASSOCIATED WITH IMAGE??
    cardID: string;
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;

    constructor() {
      }

      populateFields(annotations: any[]) {
        this.cardID = uuid();
        this.firstName = annotations[0];
        this.lastName = annotations[1];
        this.companyName = annotations[2];
        this.email = annotations[3];
        this.phone = annotations[4];
        console.log('Populated BCard Fields');
      }

}

import { uuid } from './util/uuid';
import { VisionService } from './vision.service';
import { Optional, Injectable } from '@angular/core';

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
    // private visionService: VisionService;
    annotations: string[];

    constructor(private visionService?: VisionService) {
            this.annotations = this.visionService.getAnnotationsArray();
            this.cardID = uuid();
            this.firstName = this.annotations[0];
            this.lastName = this.annotations[1];
            this.companyName = this.annotations[2];
            this.email = this.annotations[3];
            this.phone = this.annotations[4];
      }
}

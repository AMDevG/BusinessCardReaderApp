import { uuid } from './util/uuid';
import { VisionService } from './vision.service';
import { Optional } from '@angular/core';

export class BusinessCard {
    // ADD PASS DOC ID ASSOCIATED WITH IMAGE??
    cardID: string;
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;
    // private visionService: VisionService;
    // annotations: string[];

    constructor(public annotResults) {
            // this.annotations = this.visionService.getAnnotationsArray();
            this.cardID = uuid();
            this.firstName = this.annotResults[0];
            this.lastName = this.annotResults[1];
            this.companyName = this.annotResults[2];
            this.email = this.annotResults[3];
            this.phone = this.annotResults[4];
      }
}

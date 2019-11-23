import { uuid } from './util/uuid';
import { VisionService } from './vision.service';
import { Optional, Injectable, OnInit } from '@angular/core';
import { UploadService } from './fire-store.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessCard {
    // ADD PASS DOC ID ASSOCIATED WITH IMAGE??
    private subject = new Subject<any>();
    cardID: string;
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;
    // populated: boolean;

    constructor() {
        // this.populated = false;
      }

      populateFields(annotationResults: any[]) {
        console.log('Populating in BCard Class');
        this.subject.next(annotationResults);
      }

      getCard(): Observable<BusinessCard> {
        return this.subject.asObservable();
      }

}

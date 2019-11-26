import { Component, OnInit, Optional, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';
import { VisionService } from '../../vision.service';
import { UploadService } from '../../fire-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BusinessCard } from 'src/app/model/business-card.model';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit, OnDestroy {

  @Input() bCard: BusinessCard;
  newBusinessCardForm: FormGroup;

  private trigger: Subject<void> = new Subject<void>();
  allowCameraSwitch = false;
  errors: WebcamInitError[] = [];
  webcamImage = null;
  base64ImgUpload: string;
  uploadedImgURL: string;

  videoOptions: MediaTrackConstraints = {
    width: {ideal: 640},
    height: {ideal: 360}
  };

  imgQuality = 0.9;
  processing = false;

  annotations = [];

  constructor(private fb: FormBuilder, private visionService: VisionService, private httpClient: HttpClient,
              public fireStoreService: UploadService, private route: Router ) {
     this.newBusinessCardForm = this.fb.group({
     firstName: ['', Validators.required],
     lastName:  ['', Validators.required],
     companyName: [''],
     email:  [''],
     phone: ['']
   });
}

onSubmit(value: any) {
  if ( this.newBusinessCardForm.valid ) {
    this.bCard = {
      firstName: value.firstName,
      lastName: value.lastName,
      companyName: value.companyName,
      email: value.email,
      phone: value.phone,
      imageBase64: this.base64ImgUpload ? this.base64ImgUpload : '',
      imageDataUrl: this.uploadedImgURL ? this.uploadedImgURL : '',
      createdOn: new Date(),
      updatedOn: new Date(),
      userId: JSON.parse(sessionStorage.getItem('cur-user'))
    };

    this.fireStoreService.addCard(this.bCard).then( () => {
      this.route.navigate(['dash']);
    });

  }
}
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.base64ImgUpload = this.webcamImage.imageAsBase64;
    this.uploadedImgURL = this.webcamImage.imageAsDataUrl;
    this.sendVisionRequest(this.base64ImgUpload).subscribe( result => {
      this.putAnnotationsToForm(result);
    });
  }

  retake() {
    this.webcamImage = null;
    this.uploadedImgURL = '';
    this.newBusinessCardForm.reset();
  }

  sendVisionRequest(base64): any {
    this.processing = true;
    const imageToScan = base64;
    return this.visionService.executeRequest(imageToScan);
  }

  putAnnotationsToForm(value: any) {
    if (value != null) {
      const fullText = value.responses[0].fullTextAnnotation.text;
      const annotationArray: Array<string> = fullText.split('\n');

      // REGEX CODE FOR MATHCHING PATTERNS (IE. NAMES, EMAILS. PHONE)
      const fullNameAnn = {
        matched: false,
        first: '',
        last: ''
      };
      const emailAnn = {
        matched: false,
        text: ''
      };
      const phoneAnn = {
        matched: false,
        text: ''
      };
      const companyNameAnn = {
        matched: false,
        text: ''
      };

      // REGEX CODE FOR CLASSIFYING ANNOTATIONS
      annotationArray.forEach( line => {
        if ( line.match(/\w+\s((\w{1}\.|\w{1})\s)?(\w*\-)?\w+/i) ) {
          if ( !fullNameAnn.matched ) {
            const names = line.split(' ');
            fullNameAnn.matched = true;
            fullNameAnn.first = names[0];
            fullNameAnn.last = names[names.length - 1];
            return;
          }
          if ( !companyNameAnn.matched ) {
            companyNameAnn.matched = true;
            companyNameAnn.text = line;
          }}
      // EMAIL REGEX
        // tslint:disable-next-line: max-line-length
        if ( line.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i) ) {
            if ( !emailAnn.matched ) {
              emailAnn.text = line;
              return;
            }}
      // PHONE REGEX
        if ( line.match(/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/) ) {
          if ( !phoneAnn.matched ) {
            phoneAnn.text = line;
            return;
          }}});

      this.newBusinessCardForm.patchValue({firstName: fullNameAnn.first, lastName: fullNameAnn.last,
                              company: companyNameAnn.text, email: emailAnn.text,
                              phone: phoneAnn.text}); }

    this.processing = false;
  }
  ngOnInit() {}
  ngOnDestroy() {}

}

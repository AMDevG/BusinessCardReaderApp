import { Component, OnInit, Optional, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';
import { VisionService } from '../../vision.service';
import { UploadService } from '../../fire-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { BusinessCard } from 'src/app/model/business-card.model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit, OnDestroy {

  newBusCard: BusinessCard;
  newBusinessCardForm: FormGroup;

  private trigger: Subject<void> = new Subject<void>();
  allowCameraSwitch = false;
  errors: WebcamInitError[] = [];
  webcamImage: WebcamImage = null;
  base64ImgUpload: string;
  uploadedImgURL = '';

  videoOptions: MediaTrackConstraints = {
    width: {ideal: 640},
    height: {ideal: 360}
  };

  visionSubscription: any;
  imgQuality = 0.9;
  processing = false;

  // filePathUri: string;
  // annotations: any[];

  constructor(private fb: FormBuilder, private visionService: VisionService, private httpClient: HttpClient,
              public fireStoreService: UploadService, private route: Router ) {
     this.newBusinessCardForm = this.fb.group({
     firstName: ['', Validators.required],
     lastName:  ['', Validators.required],
     company: [''],
     email:  [''],
     phone: ['']
   });
}

onSubmit(value: any) {
  if ( this.newBusinessCardForm.valid ) {

    this.newBusCard = {
      firstName: value.firstName,
      lastName: value.lastName,
      companyName: value.companyName,
      email: value.email,
      phone: value.phone,
      imageBase64: this.uploadedImgURL ? this.uploadedImgURL : '',
      createdOn: new Date(),
      updatedOn: new Date(),
      userId: JSON.parse(sessionStorage.getItem('cur-user'))
    };
    console.log('Created new BCard Object: ');
    console.log(`User Id ${this.newBusCard.userId} and name ${this.newBusCard.firstName}:`);

    /* MOCK CODE NEED TO IMPL CREATE FUNCTION IN FIRESERVICE
       NAVIGATE BACK TO GALLERY DISPLAY
    this.fireStoreService.addNewCard(this.newBusCard).then( () => {
      this.route.navigate(['/dash']);
    });
    */
  }
}
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.base64ImgUpload = this.webcamImage.imageAsBase64;
    this.uploadedImgURL = this.webcamImage.imageAsDataUrl;

  /*  (*********)     NEED TO IMPLEMENT ****************   */
  // this.visionSubscription = this.[MAKE-HTTP-REQUEST](this.uploadedImgURL).subscribe( result => {
  //   this.[FUNCTION TO PROCESS THE RETURNED ANNOTATIONS](result);
  // });
  }

  ngOnInit() {}
  ngOnDestroy() {}

}


// ******************* old code   ************************************************* */

  // constructor( @Optional() private fb: FormBuilder, @Optional() private visionService: VisionService,
  //              @Optional() public uploadService: UploadService) {
  //                 this.uploadForm = this.fb.group({
  //                 firstName: '',
  //                 lastName:  '',
  //                 company: '',
  //                 email:  '',
  //                 phone: ''
  //               });
  // }

//   ngOnChanges(changes: SimpleChanges) {
//     const currentItem: SimpleChange = changes.item;
//     console.log('got item: ', currentItem.currentValue);
//     this.populateForm();
// }
// populateForm() {
//     // console.log('Populating form with annots in components');
//     if (this.finishedImageProcess === true) {
//     this.annotations = this.uploadService.getAnnotations();
//     this.uploadForm.patchValue({firstName: this.annotations[1], lastName: this.annotations[2],
//                               company: this.annotations[3],
//                               email: this.annotations[4], phone: this.annotations[5]}
//                               );
//     // this.uploadService.doneProcessing = false;
//     } else {
//       // this.populateForm();
//       console.log('Image Processing not finished yet');
//     }
//     // this.populated = this.uploadService.doneProcessing;
//     console.log('Populated Form! in Component!');
//   }



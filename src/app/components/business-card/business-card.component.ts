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
  uploadedImgURL = '';

  videoOptions: MediaTrackConstraints = {
    width: {ideal: 640},
    height: {ideal: 360}
  };

  visionSubscription: any;
  imgQuality = 0.9;
  processing = false;

  // filePathUri: string;
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
      createdOn: new Date(),
      updatedOn: new Date(),
      userId: JSON.parse(sessionStorage.getItem('cur-user'))
    };
    console.log('Created new BCard Object: ');
    console.log(`User Id ${this.bCard.userId} and name ${this.bCard.firstName}:`);

    this.fireStoreService.addCard(this.bCard).then( () => {
      this.route.navigate(['/dash']);
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
    this.visionSubscription = this.sendVisionRequest(this.base64ImgUpload).subscribe( result => {
      console.log('handleImageSubscriber received: ', result);
      // this.putAnnotationsToForm(result);
    });
  }

  retake() {
    this.webcamImage = null;
    this.uploadedImgURL = '';
    this.newBusinessCardForm.reset();
  }

  ngOnInit() {}
  ngOnDestroy() {}

  sendVisionRequest(base64): any {
    this.processing = true;
    const imageToScan = base64;
    return this.visionService.executeRequest(imageToScan);
  }

  putAnnotationsToForm(value: any) {
    if (value != null) {
      // const annotsArray = value;
      console.log('Received text array in put annots: ', value);
    }
    // this.newBusinessCardForm.patchValue({firstName: , lastName: this.annotations[2],
    //                           company: this.annotations[3],
    //                           email: this.annotations[4], phone: this.annotations[5]}
    //                           );

  }

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



import { Component, OnInit, Optional, Input } from '@angular/core';
import { BusinessCardService } from '../../business-card.service';
import { VisionService } from '../../vision.service';
import { UploadService } from '../../fire-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BusinessCard } from 'src/app/business-card';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {
  // @Input() annotationResults: any[];
  populated: boolean;
  base64Img: string;
  filePathUri: string;
  userId: string;
  subscription: Subscription;

  // testCard: BusinessCard;
  public uploadForm: FormGroup;
  annotations: any[];

  // firstName: any;
  // lastName: any;
  // compName: any;
  // titleName: any;
  // phone: any;
  // email: any;

  constructor( @Optional() private fb: FormBuilder, @Optional() private visionService: VisionService,
               @Optional() public uploadService: UploadService, public businessCard: BusinessCard) {

                this.uploadForm = this.fb.group({
                  firstNameInput:  ['', [Validators.required, Validators.minLength(3)]],
                  lastNameInput:  ['', [Validators.required, Validators.minLength(3)]],
                  companyInput: ['', [Validators.required, Validators.minLength(3)]],
                  emailInput:  ['', [Validators.required, Validators.email]],
                  phoneInput: ['', [Validators.required, Validators.minLength(3)]]
                });
                this.subscription = this.businessCard.getCard().subscribe(annotationResults => {
                  if (annotationResults) {
                    console.log('BCard Component received', annotationResults);
                    // this.populateForm(annotationResults);
                  }
                });
              } // ) { this.createForm(); }

populateForm() {
    console.log('Populating form with annots in components');
    this.annotations = this.uploadService.getAnnotations();
    this.uploadForm.setValue({firstNameInput: this.annotations[1], lastNameInput: this.annotations[2],
                              companyInput: this.annotations[3],
                              emailInput: this.annotations[4], phoneInput: this.annotations[5]}
                              );
    this.populated = this.uploadService.doneProcessing;
    console.log('Populated Form! in Component!');
  }

onSubmit(value: any) {
    console.log('form submit!');
  }

  ngOnInit() {

  }

ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit, Optional } from '@angular/core';
import { BusinessCardService } from '../../business-card.service';
import { VisionService } from '../../vision.service';
import { UploadService } from '../../upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BusinessCard } from 'src/app/business-card';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  base64Img: string;
  filePathUri: string;
  userId: string;

  public uploadForm: FormGroup;
  annotations = [];

  // firstName: any;
  // lastName: any;
  // compName: any;
  // titleName: any;
  // phone: any;
  // email: any;

  constructor( @Optional() private fb: FormBuilder, @Optional() private visionService: VisionService,
               @Optional() private uploadService: UploadService, private businessCard: BusinessCard) { } // ) { this.createForm(); }


  ngOnInit() {
      this.uploadForm = this.fb.group({
      firstNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      lastNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      companyInput: ['', [Validators.required, Validators.minLength(3)]],
      emailInput:  ['', [Validators.required, Validators.email]],
      phoneInput: ['', [Validators.required, Validators.minLength(3)]]
    });
    // MOVE CALL TO GET INTO VARIABLE
      this.populateForm(this.uploadService.getBusinessCard());
      console.log('Component Form Set');
      console.log('BCard Recieved in Component: ', this.uploadService.getBusinessCard() );
  }
  populateForm(card: BusinessCard) {
    this.uploadForm.setValue({firstNameInput: card.firstName, lastNameInput: card.lastName, companyInput: card.companyName,
                              emailInput: card.email, phoneInput: card.phone}
                              );

    console.log('Populated Form!');
  }

  onSubmit(value: any) {
    console.log('form submit!');
  }
}

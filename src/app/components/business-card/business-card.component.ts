import { Component, OnInit } from '@angular/core';
import { BusinessCardService } from '../../business-card.service';
import { VisionService } from '../../vision.service';
import { UploadService } from '../../upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {

  base64Img: string;
  filePathUri: string;
  userId: string;

  uploadForm: FormGroup;
  annotations = [];

  firstName: any;
  lastName: any;
  compName: any;
  titleName: any;
  phone: any;
  email: any;

  constructor(private fb: FormBuilder, private visionService: VisionService, private uploadService: UploadService,
              ) { this.createForm(); }

  createForm() {
    this.uploadForm = this.fb.group({
      firstNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      lastNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      companyInput: ['', [Validators.required, Validators.minLength(3)]],
      emailInput:  ['', [Validators.required, Validators.email]],
      phoneInput: ['', [Validators.required, Validators.minLength(3)]]
    });
    // return FormGroup;
  }


  populateForm() {
    this.uploadForm.setValue({firstNameInput: this.firstName, lastNameInput: this.lastName, companyInput: this.compName,

                              emailInput: this.email, phoneInput: this.phone}
                              );
    console.log('Populated Form!');
    return this.uploadForm;
  }

  onSubmit(value: any) {
    console.log('form submit!');
  }



}

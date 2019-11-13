import { Component, OnInit } from '@angular/core';
import { BusinessCardService } from '../../business-card.service';
import { VisionService } from '../../vision.service';
import { UploadService } from '../../upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  base64Img: string;
  filePathUri: string;
  userId: string;
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder) { this.createForm(); }

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
  ngOnInit() {}

  // onSubmit(value: any) {
  //   // PASSES BUSINESSCARD OBJECT TO UPLOADSERVICE TO HANDE DB WRITES/HTTP; WITH UUID FROM BCARD
  //   // SERVICE
  //   let submittedBCard = this.businessCardService
  //         .createNewBusinessCard(value.firstName, value.lastNameInput,
  //                               value.companyInput, value.email, value.phoneInput);
  //   console.log('Calling vision Service');
  //   this.visionService.extractText();
  //   console.log(this.visionService.getDescriptionArray());
  // }



}

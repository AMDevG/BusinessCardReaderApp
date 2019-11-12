import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { UploadService } from '../upload.service';
import { BusinessCardService } from '../business-card.service';
import { VisionService } from '../vision.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  uploadForm: FormGroup;
  base64EncodedImage: string;
  uploadedImgURL: string;

  constructor(public authService: AuthService, private businessCardService: BusinessCardService,
              private uploadService: UploadService, private visionService: VisionService,
              private fb: FormBuilder) {  this.createForm();  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    // PASSES BUSINESSCARD OBJECT TO UPLOADSERVICE TO HANDE DB WRITES/HTTP; WITH UUID FROM BCARD
    // SERVICE
    let submittedBCard = this.businessCardService
          .createNewBusinessCard(value.firstName, value.lastNameInput,
                                value.companyInput, value.email, value.phoneInput);
    console.log('Calling vision Service');
    this.visionService.extractText();
  }
    // this.uploadService.uploadToStorage(submittedBCard);
// ** UPLOAD TO STORAGE IS BUGGY; SEVERAL FIELDS RETURN UNDEFINED;

  createForm() {
    this.uploadForm = this.fb.group({
      firstNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      lastNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      companyInput: ['', [Validators.required, Validators.minLength(3)]],
      emailInput:  ['', [Validators.required, Validators.email]],
      phoneInput: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
}

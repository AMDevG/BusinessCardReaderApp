import { Injectable } from '@angular/core';
import { BusinessCard } from './business-card-OLD';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class BusinessCardService {

  uploadForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  // createNewBusinessCard(firstName: string, lastName: string, companyName: string, email: string, phone: string): BusinessCard {
  //   let newBCard = new BusinessCard(firstName, lastName, companyName, email, phone);
  //   return newBCard;
  // }

    createForm() {
    this.uploadForm = this.fb.group({
      firstNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      lastNameInput:  ['', [Validators.required, Validators.minLength(3)]],
      companyInput: ['', [Validators.required, Validators.minLength(3)]],
      emailInput:  ['', [Validators.required, Validators.email]],
      phoneInput: ['', [Validators.required, Validators.minLength(3)]]
    });
    return FormGroup;
  }
}

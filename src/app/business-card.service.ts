import { Injectable } from '@angular/core';
import { BusinessCard } from './business-card';

@Injectable({
  providedIn: 'root'
})
export class BusinessCardService {

  constructor() { }

  createNewBusinessCard(firstName: string, lastName: string, companyName: string, email: string, phone: string): BusinessCard {
    let newBCard = new BusinessCard(firstName, lastName, companyName, email, phone);
    return newBCard;
  }
}

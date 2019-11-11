import { uuid } from '../app/util/uuid';

export class BusinessCard {
    userId: string;
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;

    constructor(firstName: string, lastName: string, companyName: string, email: string,
                phone: string ) {
                    this.userId = uuid();
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.companyName = companyName;
                    this.email = email;
                    this.phone = phone;
                }
}

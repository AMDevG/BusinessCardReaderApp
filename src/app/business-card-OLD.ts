import { uuid } from './util/uuid';

export class BusinessCard {
    // ADD PASS DOC ID ASSOCIATED WITH IMAGE??
    userId: string;
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;
    annotations: string[];

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

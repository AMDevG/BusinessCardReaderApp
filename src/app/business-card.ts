export class BusinessCard {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;

    constructor(firstName: string, lastName: string, companyName: string, email: string,
                phone: string ) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.companyName = companyName;
                    this.email = email;
                    this.phone = phone;
                }
}

import { uuid } from '../util/uuid';

export class User {
  id: string;
  email: string;
  password: string;
  

  constructor(email: string, password: string) {
    this.id = uuid();
    this.email = email;
    this.password = password;
  }
}

import { uuid } from '../util/uuid';
import { Observable } from 'rxjs';

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

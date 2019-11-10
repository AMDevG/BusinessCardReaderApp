import { uuid } from '../util/uuid';

export class User {
  id: string;

  constructor(public userName: string) {
    this.id = uuid();
  }
}

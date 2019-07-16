import { Injectable } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class BlackListService {

  private static emails: string[] = [
    'test@test.com',
    'admin@gmail.com',
    'test@gmail.com'
  ];

  constructor(private db: AngularFireDatabase) { }

  public getEmails(): string[] {
    return BlackListService.emails.concat();
  }

}

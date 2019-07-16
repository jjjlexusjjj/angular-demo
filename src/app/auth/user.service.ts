import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserInfo } from '../user-info';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  private readonly context = '/users';

  constructor(private db: AngularFireDatabase) { }

  public saveNewUser(user: UserInfo): Observable<void> {
    return from(this.db.list(this.context).push(user))
    .pipe(map(v => console.log('user saved', v)));
  }
}

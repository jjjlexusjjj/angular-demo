import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserInfo } from '../../user-info';
import { Observable, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  private readonly context = '/users';

  constructor(private db: AngularFireDatabase, private auth: AuthService) { }

  public saveNewUser(user: UserInfo, password: string): Observable<void> {
    return this.auth.register(user, password)
      .pipe(
        tap(r => console.log('user registered', r)),
        switchMap(() => from(this.db.list(this.context).push(user))),
        map(v => console.log('data about user saved', v))
      );
  }

}

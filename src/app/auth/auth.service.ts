import { Injectable } from '@angular/core';
import {Observable, empty, from} from 'rxjs';
import {User} from './user';
import { tap, catchError } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  public login(value: { username: string; password: string }): Observable<any> {
    return empty();
  }

  public register(user: User, password: string): Observable<any> {
    console.log(`registering user ${user.email} with pass ${password}`, this.afAuth);
    return from(this.afAuth.auth.app.auth().createUserWithEmailAndPassword(user.email, password))
    .pipe(
      tap(r => console.log('registration complete', r)),
      catchError(e => {
        console.log('error on reg', e);
        throw e;
      })
    );
  }
}

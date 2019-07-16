import { Injectable } from '@angular/core';
import { Observable, empty, from } from 'rxjs';
import { User } from './user';
import { tap, catchError, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  public get currentUser() {
    return this.afAuth.user
      .pipe(map((u: firebase.User | null) => u ? new User({ id: u.uid, name: u.displayName, email: u.email }) : null));
  }

  public login(value: { email: string; password: string }): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password))
      .pipe(
        tap(c => console.log('logged in', c)),
        catchError((e: { code: string, message: string }) => {
          console.log('login error', e);
          throw e;
        })
      );
  }

  public logout(): Observable<void> {
    console.log('logging out');
    return from(this.afAuth.auth.signOut())
      .pipe(tap(() => console.log('logged out')));
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

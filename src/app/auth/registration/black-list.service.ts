import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class BlackListService {

  private readonly context = '/black-list';

  constructor(private db: AngularFireDatabase) {
   }

  public getEmails(): Observable<string[]> {
    return this.db.list<string>(this.context).valueChanges();
  }

  public isBlackListEmail(email: string): Observable<boolean> {
    return this.db.list<string>(this.context, (ref: DatabaseReference) => ref.orderByValue().equalTo(email))
    .valueChanges()
    .pipe(
      take(1),
      tap(v => console.log('blacklist email response', v)),
      map(v => v && v.length !== 0 ? true : false)
    );
  }
}

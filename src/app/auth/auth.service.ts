import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host: string = environment.firebase + 'users.json';

  constructor(private http: HttpClient) { }

  public login(value: { username: string; password: string }): Observable<any> {
    return this.http.get(this.host);
  }

  public register(user: User, password: string): Observable<any> {
    const data = {...user, password: password};
    return this.http.post(this.host, data);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Server} from './server';
import {Observable, of} from 'rxjs';
import {catchError, flatMap, map, tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable()
export class ServerService {

  private rootUrl = environment.firebase;

  constructor(private http: HttpClient) { }

  public getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.rootUrl + 'data.json')
      .pipe(
        tap(data => console.log('get response', data)),
        map(data => Object.values(data).reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])),
        catchError( err => of([]))
      );
  }

  public storeServer(servers: Server[]): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;UTF-8');
    return this.http.put(this.rootUrl + 'data.json', servers, {headers: headers});
  }
}

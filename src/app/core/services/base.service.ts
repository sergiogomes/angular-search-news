import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private API_KEY = `&apiKey=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  public get(url: string): any {
    // this.loading$.next(true);
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.url + url + this.API_KEY)
        .toPromise()
        .then(
          (res) => {
            resolve(res);
            // this.loading$.next(false);
          },
          (err) => {
            reject(err);
            // this.loading$.next(false);
          }
        );
    });
  }
}

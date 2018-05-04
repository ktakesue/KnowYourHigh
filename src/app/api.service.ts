import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}
  //   getSeedCo() {
  //     return this.http.get('http://api.otreeba.com/v1/seed-companies');
  //   }
}

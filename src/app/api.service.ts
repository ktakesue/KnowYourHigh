import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, HttpModule } from '@angular/http';

@Injectable()
export class APIService {
  data: any = {};
  constructor(private http: HttpClient) {}

  get(something: string) {
    return this.http.get(`https://kushy.net/api/v3/${something}`);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Http, Response, HttpModule } from "@angular/http";

@Injectable()
export class APIService {
  data: any = {};
  constructor(private http: HttpClient) {}

  public getbyCat(something: string) {
    return this.http.get(`https://kushy.net/api/v3/${something}`);
  }

  public filterSearch(something: string, something2: string) {
    return this.http.get(
      `https://kushy.net/api/v3/${something}/?filters[name][contains]=${something2}`
    );
  }
}

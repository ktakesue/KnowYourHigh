import { Component, OnInit } from '@angular/core';
// import { APIService } from '../api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'kt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  private apiUrl = 'http://strainapi.evanbusse.com/Ui4UTeN/searchdata/effects';
  data: any = {};

  searchAPI(searchTerm: HTMLInputElement): void {
    console.log(`Yous entered: ${searchTerm.value}`);
  }
  constructor(private http: Http) {
    console.log('getting seed companies');
    this.getSeedCo();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }
  getSeedCo() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit() {}
}

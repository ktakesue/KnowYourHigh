import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'kt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  data: any = {};
  selected;
  subscription: Subscription;
  searchAPI(searchTerm: HTMLInputElement): void {
    console.log(`Yous entered: ${searchTerm.value}`);
  }
  constructor(private APIService: APIService, private http: HttpClient) {}

  onSelectChange() {
    console.log('onSelectChange', this.selected);
    this.subscription = this.APIService.get(this.selected).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
}

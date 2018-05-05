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

  constructor(private APIService: APIService, private http: HttpClient) {}
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  onSelectChange() {
    // if (searchTerm.value) {
    //   console.log('onSelectChange', this.selected);
    // } else {
    this.subscription = this.APIService.getbyCat(this.selected).subscribe(
      data => {
        console.log(data);
        this.data = data;
      }
    );
  }
  searchAPI(searchTerm: HTMLInputElement): void {
    console.log(`Yous entered: ${searchTerm.value}`);
    // var apiLink = `https://kushy.net/api/v3/${
    //   this.selected
    // }/?filters[name][contains]=${searchTerm.value}`;
    // console.log(apiLink);
    if (!searchTerm.value) {
      console.log('You must select a category to search');
      return;
    } else {
      this.subscription = this.APIService.filterSearch(
        this.selected,
        searchTerm.value
      ).subscribe(data => {
        console.log(data);
        this.data = data;
      });
    }
  }
  // }

  ngOnInit() {}
}

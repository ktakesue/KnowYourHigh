import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PHOTOS } from 'assets/galleryphotos';
import { ProgressSpinnerService } from '../progress-spinner.service';

@Component({
  selector: 'kt-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photos = PHOTOS;
  START = 0;
  TOTAL = PHOTOS.length;
  button$ = new Subject();
  counter$: Observable<any>;

  constructor() // private http: Http, private ProgressSpinnerService: ProgressSpinnerService
  {
    //     this.ProgressSpinnerService.spinnerActive.subscribe(active =>
    //       this.toggleSpinner(active))
    //     }
    //     toggleSpinner(active) {
    //     console.log('inside toggle spinner')
    //     this.spinnerActive = active
    // }
    this.counter$ = Observable.merge(
      this.button$,
      Observable.interval(10000).mapTo(1)
    )
      .startWith(this.START)
      .scan((acc: number, curr: any) => {
        //if next && last image
        if (curr === 1 && acc === this.TOTAL - 1) return 0;
        //if prev && first image
        if (curr === -1 && acc === 0) return this.TOTAL - 1;
        //else
        return acc + curr;
      });
  }
  ngOnInit() {}
}

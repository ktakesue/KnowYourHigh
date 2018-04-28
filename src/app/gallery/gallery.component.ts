import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PHOTOS } from 'assets/galleryphotos';

@Component({
  selector: 'kt-gallery',
  templateUrl: './gallery.component.html',
  //   template: `
  //  <img src= "{{photos[(counter$ | async )]}}">
  //  <h1> Dis is Image</h1>
  //  <button (click)="button$.next(-1)"> Prev</button>
  //  <button (click)="button$.next(1)">Next</button>`,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photos = PHOTOS;
  START = 0;
  TOTAL = PHOTOS.length;
  button$ = new Subject();
  counter$: Observable<any>;

  constructor() {
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

import {
  Component,
  OnInit
  // ViewEncapsulation,
  // ViewChild,
  // ElementRef,
  // PipeTransform,
  // Pipe
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PHOTOS } from 'assets/galleryphotos';
// import { DomSanitizer } from '@angular/platform-browser';

// @Pipe({ name: 'safe' })
// export class SafePipe implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer) {}
//   transform(url) {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }
// }
import { EmbedVideoService } from 'ngx-embed-video';

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
  iframe_html: any;
  videoUrl = 'https://www.youtube.com/watch?v=lLWEXRAnQd0&t=0s&index=1&list=PLAEQD0ULngi67rwmhrkNjMZKvyCReqDV4';
  constructor(
    private embedService: EmbedVideoService // private http: Http, private ProgressSpinnerService: ProgressSpinnerService
  ) {
    //     this.ProgressSpinnerService.spinnerActive.subscribe(active =>
    //       this.toggleSpinner(active))
    //     }
    //     toggleSpinner(active) {
    //     console.log('inside toggle spinner')
    //     this.spinnerActive = active
    // }
    this.iframe_html = this.embedService.embed(this.videoUrl);

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

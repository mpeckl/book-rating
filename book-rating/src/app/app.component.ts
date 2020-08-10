import { Component } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    // import { of, timer } from 'rxjs';
    // of('A', 'B', 'C')
    // timer(3000) // einmalig
    /*
    timer(0, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe(e => console.log(e));
    */

    ///////////////////////////////

    function producer(o) {
      const result = 1 + 1;
      o.next(result);
      o.next(5);
      o.next(7);

      setTimeout(() => o.complete(), 2000);
    }

    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE')
    };

    // producer(observer);
    // const myObservable$ = new Observable(producer);
    // myObservable$.subscribe(observer);
    // myObservable$.subscribe(e => console.log(e));



    const myObservable2$ = new Observable(obs => {
      obs.next(1);
      obs.next(2);
      obs.next(3);
      obs.complete();
    });

  }
}

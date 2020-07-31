import { Component } from '@angular/core';
import { ReplaySubject, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new ReplaySubject();

  constructor(private es: ExerciseService) { }

  start() {
    this.es.randomError().pipe(
      // retry(5)
      catchError(err => {
        console.log('BÖSER FEHLER:', err);

        // Fehler weiterwerfen
        // return throwError('Hier ist ein Fehler!');

        // Fehler ersetzen
        return of('Kein Fehler passiert!', 'Cool');
      })
    ).subscribe({
      next: value => this.logStream$.next(value),
      error: err => this.logStream$.next('💥 ERROR: ' + err)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;
  results$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');

    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      filter(term => term.length >= 3), // filter(() => this.searchControl.valid)
      switchMap(term => this.bs.search(term))
    );

    /*
    ## Typeahead-Suche
    - Suchbegriff mindestens 3 Zeichen lang
    - erst abschicken, wenn Nutzer für 1000 ms die Finger still hält
    - BookStoreService
    - this.bs.search()
    - Ergebnisse anzeigen (einfache Liste)
    - Extra: AsyncPipe
    - Extra: Ladeanzeige
    */
  }

}

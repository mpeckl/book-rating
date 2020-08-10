import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  getStars(): any[] {
    return new Array(this.book.rating);
  }

  doRateUp(): void {
    this.rateUp.emit(this.book);
  }

  doRateDown(): void {
    this.rateDown.emit(this.book);
  }


  log(): void {
    console.log('CD');
  }



}

import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  // Lifecycle Hook
  ngOnInit(): void {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        rating: 5,
        price: 36.90
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Das andere Framework',
        rating: 3,
        price: 32.90
      }
    ];
  }

  doRateUp(book: Book): void {
    console.log('UP', book);
  }

  doRateDown(book: Book): void {
    console.log('DOWN', book);
  }

}

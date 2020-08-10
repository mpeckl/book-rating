import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book-parent',
  templateUrl: './create-book-parent.component.html',
  styleUrls: ['./create-book-parent.component.scss']
})
export class CreateBookParentComponent implements OnInit {

  constructor(private bs: BookStoreService, private router: Router) { }

  ngOnInit(): void {
  }

  createBook(book: Book): void {
    console.log('create book' + book.isbn);

    this.bs.create(book).subscribe(() => {
      this.router.navigate(['/books', book.isbn]);
    });
  }
}

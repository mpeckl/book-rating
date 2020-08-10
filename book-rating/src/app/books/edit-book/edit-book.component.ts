import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'br-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  book$: Observable<Book>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bs: BookStoreService) { }

  ngOnInit(): void {
    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      switchMap(isbn => this.bs.getSingle(isbn))
    );
  }

  updateBook(book: Book): void {
    this.bs.update(book).subscribe(() => {
      this.router.navigate(['/books', book.isbn]);
    });
  }

}

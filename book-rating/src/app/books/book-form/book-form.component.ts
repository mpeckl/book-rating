import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { Router } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnChanges {
  bookForm: FormGroup;

  @Input() title: string;
  @Input() book: Book;
  @Output() submitBook = new EventEmitter<Book>();

  constructor(private bs: BookStoreService, private router: Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
        Validators.pattern('^[0-9]*$'),
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl(0, Validators.min(2)),
    });

    if (this.book) {
      this.bookForm.setValue({
        isbn: this.book.isbn,
        title: this.book.title,
        description: this.book.description,
        price: this.book.price
      });

      // bei einer Änderung darf die ISBN nicht verändert werden
      this.bookForm.get('isbn').disable();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Brauche ich das überhaupt?
    // ngOnInit wird nach ngOnChanges aufgerufen, dann kann ich das
    // Setzen des Formulars doch immer im ngOnInit durchführen, oder?
    if (this.bookForm) {
      this.bookForm.setValue({
        isbn: this.book.isbn,
        title: this.book.title,
        description: this.book.description,
        price: this.book.price
      });
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.invalid && control.touched;
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.hasError(errorCode) && control.touched;
  }

  showErrors(): void {
    console.log(this.bookForm.get('isbn').errors);
  }

  doSubmitBook(): void {
    this.submitBook.emit({
      ...this.bookForm.value,
      isbn: this.book ? this.book.isbn : this.bookForm.get('isbn').value,
      rating: this.book ? this.book.rating : 1
    });
  }


}

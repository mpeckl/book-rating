import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bs: BookStoreService, private router: Router) {}

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

  submitForm(): void {
    const newBook: Book = {
      ...this.bookForm.value,
      rating: 1
    };

    this.bs.create(newBook).subscribe(() => {
      this.router.navigate(['/books', newBook.isbn]);
    });
  }
}

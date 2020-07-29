import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '',
      title: '',
      description: '',
      price: 1,
      rating: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should emit event with book for doRateUp()', () => {
    // Arrange
    let emittedBook: Book;

    component.rateUp.subscribe((book: Book) => {
      emittedBook = book;
    });

    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBeTruthy();
    expect(emittedBook).toEqual(component.book);

  });
});

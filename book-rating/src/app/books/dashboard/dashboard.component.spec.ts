import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock;

  beforeEach(async(() => {
    book = {
      isbn: '',
      title: '',
      description: '',
      price: 1,
      rating: 3
    };

    ratingMock = {
      rateUp: () => book
    };

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        // Service ausmocken: Wenn BRS angefordert wird,
        // dann liefere ratingMock aus
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for doRateUp()', () => {
    const rs = TestBed.inject(BookRatingService);
    // Objekt überwachen
    // Aufruf aber durchleiten zum "originalen" Service (= zu unserem Mock)
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.doRateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalled();
  });
});

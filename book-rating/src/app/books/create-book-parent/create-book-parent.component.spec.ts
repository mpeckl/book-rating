import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookParentComponent } from './create-book-parent.component';

describe('CreateBookParentComponent', () => {
  let component: CreateBookParentComponent;
  let fixture: ComponentFixture<CreateBookParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

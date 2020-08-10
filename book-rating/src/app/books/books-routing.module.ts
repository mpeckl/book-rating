import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { CreateBookParentComponent } from './create-book-parent/create-book-parent.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: CreateBookParentComponent},
  { path: 'update/:isbn', component: EditBookComponent},
  { path: 'search', component: SearchComponent },
  { path: ':isbn', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { UserPageComponent } from './user/user-page/user-page.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'borrowing',
    component: BorrowingComponent
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

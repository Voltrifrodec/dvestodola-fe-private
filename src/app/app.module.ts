import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { BookComponent } from './book/book.component';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user-service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    BookComponent,
    BorrowingComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

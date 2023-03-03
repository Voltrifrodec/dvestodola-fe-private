import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export enum Menu {
  BOOKS = 'Books',
  USERS = 'Users',
  BORROWINGS = 'Borrowings'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DveStodola';
  form: FormGroup;

  persons: Array<{
    name: string,
    surname: string
  }
  >= [];

  menu = Menu;
  actualMenu : Menu = Menu.USERS;


  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }


  changeMenu(menuItem: Menu) : void {
    this.actualMenu = menuItem;
  }

  savePerson() : void {
    console.log('Osoba:', this.form.value);
    this.persons.push(this.form.value);
    this.form.reset();
  }
  

}

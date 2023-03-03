import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, Menu } from 'src/app/common/model/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  form: FormGroup;

  persons: Array<User> = [];



  constructor() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }


  savePerson(): void {
    if (this.form.controls.id.value) {
      const index = this.persons.findIndex(person => person.id === this.form.controls.id.value);
      if (index !== -1) {
        console.log('(Edit) Osoba -> ID:', index);
        this.persons[index] = this.form.value;
      }
    }
    else {
      console.log('Osoba:', this.form.value);
      this.persons.push({
        id: Date.now(),
        name: this.form.controls.name.value,
        surname: this.form.controls.surname.value
      });
    }
    this.form.reset();
  }

  editPerson(index: number): void {
    this.form.setValue(this.persons[index]);
  }

  deletePerson(index: number): void {
    this.persons.splice(index, 1);
  }
}

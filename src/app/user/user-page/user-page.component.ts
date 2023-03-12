import { Component } from '@angular/core';
import { User } from 'src/app/common/model/user.model';
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  constructor(private service: UserService) {
    this.getPersons();
  }

  persons: Array<User> = [];
  person?: User;

  getPersons() : void {
    this.service.getUsers().subscribe((persons : User[]) => { this.persons = persons });
  }

  createPerson(person: User) : void {
    this.service.createUser(person).subscribe(() => {
      console.log('Osoba bola uložená.');
      this.getPersons();
    });
  } 

  selectPersonToUpdate(personId : number) : void {
    this.service.getUser(personId).subscribe((person : User) => { this.person = person });
  }

  updatePerson(person : User) : void {
    this.service.updateUser(person).subscribe(() => {
      console.log('Osoba bola úspešne zmenená.');
      this.getPersons();
    });
  }
  
  deletePerson(personId : number) : void {
    this.service.deleteUser(personId).subscribe(() => {
      console.log('Osoba bola úspešne zmazaná.');
      this.getPersons();
    });
  }

}

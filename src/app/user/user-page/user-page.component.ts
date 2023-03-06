import { Component } from '@angular/core';
import { User } from 'src/app/common/model/user.model';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent {

  //? Public Server: http://labs.fpv.umb.sk:8080/api/customers
  constructor(private http: HttpClient) {
    this.getPersons();
  }


  getPersons() : void {
    this.http.get<User[]>('http://labs.fpv.umb.sk:8080/api/customers')
      .subscribe((persons : User[]) => { this.persons = persons });
  }

  persons : Array<User> = [];

  person? : User;

  createPerson(person : User) : void {
    this.http.post('http://labs.fpv.umb.sk:8080/api/customers', person).subscribe(() => {
      console.log('Osoba bola uspesne ulozena');
      this.getPersons();
    });
    // this.persons.push(person);
    // console.log('Person List:', this.persons);
  }

  updatePerson(person : User) : void {
    this.http.put(`http://labs.fpv.umb.sk:8080/api/customers/${person.id}`, person).subscribe(person => {
      console.log('Osoba bola úspešne zmenená.');
      this.getPersons();
    })
    // const index = this.persons.findIndex(person => person.id === person.id);
    // if(index !== -1) {
    //   this.persons[index] = person;
    //   this.person = undefined;
    // }
  }
  
  selectPersonToUpdate(personId : number) : void {
    this.person = this.persons.find(person => person.id === personId);
  }

  deletePerson(personId : number) : void {
    this.http.delete('http://labs.fpv.umb.sk:8080/api/customers/${personId}').subscribe(() => {
      console.log('Osoba bola úspešne zmazaná.');
      this.getPersons();
    });
    // const index = this.persons.findIndex(person => person.id === personId);
    // if(index !== -1) {
    //   this.persons.splice(index, 1);
    // }
  }

  

}

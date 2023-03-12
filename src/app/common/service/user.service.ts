import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

// Vpustenie servisu do komponentu (bud pre celu aplikaciu (root) do pola 'providers' v app.module.ts)
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://labs.fpv.umb.sk:8080/api/customers';

  constructor(private http : HttpClient) {

   }

  getPersons(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getPerson(userId : number) : Observable<User> {
    return this.http.get<User>(`${this.url}/${userId}`);
  }

  createUser(user : User) : Observable<number> {
    return this.http.post<number>(this.url, user);
  }

  updateUser(user : User) : Observable<number> {
    return this.http.put<number>(`${this.url}/${user.id}`, user);
  }

  deleteUser(userId : number) : Observable<void> {
    return this.http.delete<void>(`${this.url}/${userId}`);
  }


}

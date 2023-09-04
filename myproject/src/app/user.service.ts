import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://127.0.0.1:3000/users';
  // users: User[] = [
  //   {
  //     id: 1,
  //     email: 'Neha@aceonics.com',
  //     name: 'Neha',
  //   },
  //   {
  //     id: 2,
  //     email: 'lucky@aceonics.com',
  //     name: 'lucky',
  //   },
  //   {
  //     id: 3,
  //     email: 'khushi@aceonics.com',
  //     name: 'khushi',
  //   },

  // ];

  constructor() { }

  async getUsers(): Promise<User[]> {
    const users = await fetch(this.url);
    return await users.json() ?? [];
  }


  async getUser(id: number) {
    const user = await fetch(this.url + '/' + id);
    return user.json()
  }

  async createUser(createUser: User) {
    const response = await fetch(this.url, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(createUser)
    })
    return response.json()
  }

  async deleteUser(id: number) {
    await fetch(this.url + '/' + id, {
      method: 'DELETE',
    });
    
  } 

  async updateUser(id: number, updatedUser: User) {
    console.log(updatedUser);
    const response = await fetch(this.url + '/' + id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    });
    return response.json();
  }

  async searchUser(search: string){
    const filter = await fetch(this.url + '/search/'+ search);
    return await filter.json() ?? [];
  }
}

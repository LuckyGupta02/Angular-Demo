import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  listOfColumn = [
    {
      title: 'Id',
      priority: false
    },
    {
      title: 'Email',
      priority: 3
    },
    {
      title: 'Name',
      priority: 2
    },
    {
      title: 'Actions',
      priority: 1
    }
  ];

  constructor(private userService: UserService, private router: Router) { }

  users: User[] = [];
  user?: User;
  search?: any;
  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  async onSelect(user: User) {
    await this.router.navigate([`/users/${user.id}`]);
  }

  async deleteUser(id: number) {
    console.log("deleted user")
    await this.userService.deleteUser(id);
    this.users = await this.userService.getUsers();
  }

  async updateUser(user: User) {
    await this.router.navigate([`/userUpdate/${user.id}`]);
  }

  async searchUser() {
    this.users = await this.userService.searchUser(this.search);
  }
  async reset() {
    this.users = await this.userService.getUsers();
    this.search = " "
  }
}

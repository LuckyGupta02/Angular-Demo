import { Injectable } from '@nestjs/common';

const USERS = [
  {
    id: 1,
    email: 'Neha@aceonics.com',
    name: 'Neha',
  },
  {
    id: 2,
    email: 'lucky@aceonics.com',
    name: 'lucky',
  },
  {
    id: 3,
    email: 'khushi@aceonics.com',
    name: 'khushi',
  },
];

@Injectable()
export class UsersService {
  getUsers() {
    return USERS;
  }

  createUser(userDetails: any) {
    const user = {
      id: USERS[USERS.length - 1].id + 1,
      ...userDetails,
    };
    USERS.push(user);

    return user;
  }

  getUser(id: number) {
    return USERS.find((user) => user.id == id);
  }

  updateUser(id: number, user: any) {
    const index = USERS.findIndex((user) => user.id == id);
    USERS[index] = {
      ...USERS[index],
      ...user,
    };
    return USERS[index];
  }

  deleteUser(id: number) {
    const index = USERS.findIndex((user) => user.id == id);
    USERS.splice(index, 1);
  }

  searchUser(search: string) {
    return USERS.filter(
      (user) => user.name.includes(search) || user.email.includes(search),
    );
  }
}

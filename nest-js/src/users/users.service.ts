import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Like, Repository } from 'typeorm';
import { User } from './user';
import { combineLatest } from 'rxjs';

// const USERS = [
//     {
//         id: 1,
//         email: 'Neha@aceonics.com',
//         name: 'Neha',
//     },
//     {
//         id: 2,
//         email: 'lucky@aceonics.com',
//         name: 'lucky',
//     },
//     {
//         id: 3,
//         email: 'khushi@aceonics.com',
//         name: 'khushi',
//     },
// ];

@Injectable()
export class UsersService {
    constructor(
        @InjectEntityManager()
        private entityManager: EntityManager
    ) { }

    async getUsers() {
        const users = await this.entityManager.find(User);
        return users;
    }

    async createUser(userDetails: any){
        const user:any = await this.entityManager.insert(User, {
            ...userDetails
        })
        // const user = {
        //     id: USERS[USERS.length - 1].id + 1,
        //     ...userDetails,
        // };
        // USERS.push(user);
        return userDetails;
    }

    async getUser(id: number) {
        const user = await this.entityManager.findOne(User, { where: { id } } )
        return user;
    }

    async updateUser(id: number, user: any) {
        const updateUser = await this.entityManager.update(User, id, user);
        console.log(id,updateUser);
        return {id,user};
        // const index = USERS.findIndex((user) => user.id == id);
        // USERS[index] = {
        //     ...USERS[index],
        //     ...user,
        // };
        // return USERS[index];
    }

    async deleteUser(id: number) {
        await this.entityManager.delete(User, id);
        return id;
        // const index = USERS.findIndex((user) => user.id == id);
        // USERS.splice(index, 1);
    }

    async searchUser(search: string) {
        return await this.entityManager.find(User, {
            where: [
                {
                    email: Like(`%${search}%`)
                },
                {
                    name: Like(`%${search}%`)
                }
            ]
        })
        // return USERS.filter(
        //     (user) => user.name.includes(search) || user.email.includes(search),
        // );
    }
}

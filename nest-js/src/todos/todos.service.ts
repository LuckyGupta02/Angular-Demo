import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { EntityManager, Like } from 'typeorm';
import { Todo } from './todo';
import { Resolver } from '@nestjs/graphql';

// const TODOS = [
//     {
//         id: 1,
//         title: 'DataCollection',
//         description: 'Collect data from different source',
//         assignedTo: 1,
//     },
//     {
//         id: 2,
//         title: 'DataEntry',
//         description: 'Record all the collected data',
//         assignedTo: 2,
//     },
//     {
//         id: 3,
//         title: 'DataAnalysis',
//         description: 'Analyze the recorded data',
//         assignedTo: 3,
//     },
// ];

@Injectable()
export class TodosService {
    constructor(@InjectEntityManager()
    private entityManager: EntityManager,
        private userService: UsersService,) { }

    async getTodos() {
        const todos = await this.entityManager.find(Todo, { relations: ['assignedTo'] });
        return todos
        // return TODOS.map(todo => {
        //     return {
        //         ...todo,
        //         assignedTo: this.userService.getUser(todo.assignedTo)
        //     }
        // })       
    }

    async createTodo(todoDetails: any) {
        console.log("create todo")
        const todo = await this.entityManager.insert(Todo, [{
            ...todoDetails
        }]
        )
        // const todo = {
        //     id: TODOS[TODOS.length - 1].id + 1,
        //     ...todoDetails,
        // };
        // TODOS.push(todo);

        return todo;
    }

    async getTodo(id: number) {
        const todo = await this.entityManager.findOne(Todo, {
            where: { id },
            relations: ['assignedTo']
        });
        return todo;
        // return TODOS.find((todo) => todo.id == id);
    }

    async updateTodo(id: number, todo: any) {
        const updateTodo = await this.entityManager.update(Todo, id, todo);
        console.log(updateTodo)
        return updateTodo;
        // const index = TODOS.findIndex((todo) => todo.id == id);
        // TODOS[index] = {
        //     ...TODOS[index],
        //     ...todo,
        //     assignedTo: todo.assignedTo.id,
        // };
        // return TODOS[index];
    }

    async deleteTodo(id: number) {
        await this.entityManager.delete(Todo, id);
        return true;
        // const index = TODOS.findIndex((todo) => todo.id == id);
        // TODOS.splice(index, 1);
    }

    async searchTodo(search: string) {
        return await this.entityManager.find(Todo, {
            where: [
                {
                    title: Like(`%${search}%`)
                    
                },
                {
                    description: Like(`%${search}%`)
                    
                },
                {
                    assignedTo: {name: Like(`%${search}%`)}
                }
            ], 
            relations: ['assignedTo']          
        })
        // return TODOS.filter(
        //     (todo) => todo.title.includes(search) || todo.description.includes(search),
        // );
    }

}

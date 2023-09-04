import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { __assign } from 'tslib';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  listOfColumn = [
    {
      title: 'Id',
      priority: false
    },
    {
      title: 'Title',
      priority: 4
    },
    {
      title: 'Description',
      priority: 3
    },
    {
      title: 'Assigned To',
      priority: 2
    },
    {
      title: 'Actions',
      priority: 1
    }
  ];

  constructor(private todoService: TodoService, private userService: UserService, private router: Router) { }

  id?: number;
  isVisible = false;
  todos: Todo[] = [];
  todoDetail!: Todo[];
  users: User[] = [];
  editTodo: { [key: string]: { edit: boolean; data: Todo } } = {};
  search?: any;

  async ngOnInit() {
    this.todos = await this.todoService.getTodos();
    this.updateTodo();
    this.users = await this.userService.getUsers();
    console.log(this.users);
  }

  startEdit(id: number): void {
    this.editTodo[id].edit = true;
  }

  async cancelEdit(id: number): Promise<void> {
    const index = await this.todos.findIndex(todo => todo.id === id);
    this.editTodo[id] = {
      data: { ...this.todos[index] },
      edit: false
    };
  }

  async saveEdit(updatedtodo: Todo): Promise<void> {
    this.editTodo[updatedtodo.id].edit = false;
    console.log(updatedtodo);
    await this.todoService.updateTodo(updatedtodo.id, updatedtodo);
  }

  async updateTodo(): Promise<void> {
    this.todos.forEach(todo => {
      this.editTodo[todo.id] = {
        edit: false,
        data: { ...todo }
      };
    });
  }

  async deleteTodo(todo: Todo) {
    await this.todoService.deleteTodo(todo.id);
    this.todos = await this.todoService.getTodos();
    await this.updateTodo();
  }

  async viewTodoDetail(todo: Todo) {
    await this.router.navigate([`/todos/${todo.id}`]);
  }

  cancelTodoDetail(): void {
    this.isVisible = false;
  }

  getFilteredUsers(id: number) {
    return this.users.filter(user => user.id !== id);
  }

  async searchTodo() {
    if(!this.search){
      this.todos = await this.todoService.getTodos();
    }
    this.todos =  await this.todoService.searchTodo(this.search);
  }

  async reset() {
    this.todos = await this.todoService.getTodos();
    this.search = " "
  }
}

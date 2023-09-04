import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://127.0.0.1:3000/todos';


  async getTodos(): Promise<Todo[]> {
    const todos = await fetch(this.url);
    return await todos.json() ?? [];
  }


  async getTodo(id: number) {
    const todo = await fetch(this.url + '/' + id);
    return todo.json();
  }

  async createTodo(createTodo: Todo) {
    const response = await fetch(this.url, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(createTodo)
    })
    return await response.json() ?? [];
  }

  async deleteTodo(id: number) {
    await fetch(this.url + '/' + id, {
      method: 'DELETE',
    });
    
  }

  async updateTodo(id: number, updatedTodo: Todo) {
    const response = await fetch(this.url + '/' + id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    });
    return response.json();
  }

  async searchTodo(search: string){
    const filter = await fetch(this.url + '/search/'+ search);
    return await filter.json() ?? [];
  }

}

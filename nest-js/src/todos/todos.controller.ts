import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    getTodos() {
      return this.todosService.getTodos();
    }
  
    @Get(':id')
    getTodo(@Param('id') id: number) {
      return this.todosService.getTodo(id);
    }
  
    @Get('search/:query')
    searchTodo(@Param('query') query: string) {
      return this.todosService.searchTodo(query);
    }
  
    @Patch(':id')
    updateTodo(@Param('id') id: number, @Body() todo: any) {
      return this.todosService.updateTodo(id, todo);
    }
  
    @Post()
    createTodo(@Body() todoDetail: any) {
      return this.todosService.createTodo(todoDetail);
    }
  
    @Delete(':id')
    deleteTodo(@Param('id') id: number) {
      return this.todosService.deleteTodo(id);
    }
}

import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  constructor(private todoService: TodoService ,private route: ActivatedRoute, private router:Router ) { }
  todo?: Todo;

  async ngOnInit() {
    this.route.paramMap.subscribe(async (params: any) => {
      this.todo = await this.todoService.getTodo(Number(params.get('id')));
      console.log();
    });
  }

}

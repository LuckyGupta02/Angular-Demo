import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  constructor(private todoService: TodoService, private fb: UntypedFormBuilder, private userService: UserService, private router: Router) { };

  validateForm!: UntypedFormGroup;
  users: User[] = [];
  async ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      assignedTo: [null, [Validators.required]]
    });
    this.users = await this.userService.getUsers();
  }

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      await this.todoService.createTodo(this.validateForm.value);
      this.validateForm.patchValue({
        title: [null,],
        description: [null,],
        assignedTo: [null,]
      });
      this.router.navigate([`/todos`])
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}

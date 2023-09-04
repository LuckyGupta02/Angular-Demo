import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: DashboardComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/:id', component: DetailComponent },
  { path: 'userCreate', component: CreateComponent },
  { path: 'userUpdate/:id', component: UpdateComponent, },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoDetailsComponent},
  { path: 'createTodo', component: CreateTodoComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

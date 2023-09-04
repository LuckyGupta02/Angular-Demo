import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RegistrationComponent } from './registration/registration.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import{NzLayoutModule} from 'ng-zorro-antd/layout';
import{NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import{NzDropDownModule} from 'ng-zorro-antd/dropdown';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TodosComponent } from './todos/todos.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DetailComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    CreateComponent,
    UpdateComponent,
    TodosComponent,
    TodoDetailsComponent,
    CreateTodoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    RouterModule,
    AppRoutingModule,
    NzInputNumberModule,
    NzInputModule,
    NzImageModule,
    NzMenuModule,
    NzTypographyModule,
    NzToolTipModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzCollapseModule,
    NzIconModule,
    NzTableModule,
    NzDescriptionsModule,
    NzSelectModule,
    NzModalModule,
    NzPageHeaderModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }

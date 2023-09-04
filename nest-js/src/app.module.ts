import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user';
import { Todo } from './todos/todo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersResolver } from './users/users.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'nestjsdb',
      entities: [User,Todo],
      synchronize: true,      
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController, UsersController, TodosController],
  providers: [AppService, UsersService, TodosService, UsersResolver],
  
})
export class AppModule {
  constructor() {}
}



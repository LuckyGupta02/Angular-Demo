import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Todo } from 'src/todos/todo';
import { Field, Int, ObjectType} from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Todo, (todo) => todo.assignedTo)
  assignedTodos: Todo[];
}

@InputType()
export class InputUser {
  @Field()
  email: String;

  @Field()
  name: string;
}


@InputType()
export class UpdateUser {

  @Field()
  email: String;

  @Field()
  name: string;
}
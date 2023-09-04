import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/user';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';


@ObjectType()
@Entity()
export class Todo {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.assignedTodos, { onDelete: "SET NULL" })
  assignedTo: User;
}
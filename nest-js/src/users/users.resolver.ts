import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { InputUser, UpdateUser, User, } from "./user";
import { UsersService } from "./users.service";
import { Post } from "@nestjs/common";
import { Any } from "typeorm";

@Resolver((of) => User)
export class UsersResolver {
    constructor(private userService: UsersService,) { }

    @Query(returns => [User])
    async getUsers() {
        return this.userService.getUsers();
    }

    @Query(returns => User)
    async getUser(@Args('id', { type: () => Int }) id: number) {
        return this.userService.getUser(id);
    }

    @Mutation(returns => User)
    async createUser(@Args({ name: 'newUser', type: () => InputUser }) newUser: InputUser) {
        return this.userService.createUser(newUser);
    }

    @Mutation(returns => User)
    async deleteUser(@Args({ name: 'id', type: () => Number }) id: number) {
        return this.userService.deleteUser(id);
    }

    @Mutation(returns => User)
    async updateUser(@Args({ name: 'id', type: () => Int }) id: number,
        @Args({ name: 'updateUser', type: () => UpdateUser }) updateUser: UpdateUser) {
            return this.userService.updateUser(id, updateUser);
    }
}
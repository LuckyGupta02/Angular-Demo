import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { query } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(id);
  }

  @Get('search/:query')
  searchUser(@Param('query') query: string) {
    return this.usersService.searchUser(query);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() user: any) {
    return this.usersService.updateUser(id, user);
  }

  @Post()
  createUser(@Body() userDetail: any) {
    return this.usersService.createUser(userDetail);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}

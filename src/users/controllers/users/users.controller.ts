import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Dilma',
        email: 'dilmna@opressora.net',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [],
      },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  insertUser(@Body() userData: CreateUserDTO) {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {  
    return this.userService.fetchUserById(id);
  }
}

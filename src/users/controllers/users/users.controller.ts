import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Dilma', email: 'dilmna@opressora.net' }];
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
  insertUser(@Body() userData: CreateUserDTO) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Req() request: Request, @Res() response: Response) {
    console.log(request.params);
    response.send('');
  }
}

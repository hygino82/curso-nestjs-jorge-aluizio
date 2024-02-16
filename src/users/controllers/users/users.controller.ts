import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';

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

  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    return { id, postId };
  }
}

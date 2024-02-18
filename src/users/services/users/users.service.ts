import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Dilma', email: 'dilma@opressora.net', id: 1 },
    { username: 'Jupira', email: 'jupira@gmail.com', id: 2 },
    { username: 'Tenório', email: 'tenorio@zipmail.com', id: 3 },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserType) {
    const user = {
      id: this.fakeUsers.length + 1,
      ...userData,
    };

    this.fakeUsers.push(user);

    return user;
  }

  fetchUserById(id: number) {
    const users = this.fakeUsers.filter((user) => user.id == id);

    if (users.length == 0) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    
    return users[0];
  }
}

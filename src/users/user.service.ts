import { Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository'; // Assuming you have a UserRepository

@Injectable()
export class UserService {
  findUserById: any;
  constructor(private readonly userRepository: UserRepository) { }

  async userExists(userId: number): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId
      }
    });
    return !!user;
  }
}
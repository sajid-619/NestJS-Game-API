// user.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Add custom repository methods if needed

  async findUserById(userId: number): Promise<User | undefined> {
    return this.findOne(userId);
  }
}

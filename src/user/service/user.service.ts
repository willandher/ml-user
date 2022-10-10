import { Injectable } from '@nestjs/common';
import { IRepository } from '../persistence/i-repository';
import { UserEntity } from '../persistence/model/user.entity';
import { UserRepository } from '../persistence/repository/user.repository';

@Injectable()
export class UserService {
  constructor(readonly userRepository: UserRepository) {}
  getHello(): any {
    return this.userRepository.get(null);
  }
}

import { Injectable } from '@nestjs/common';
import { UserRepository } from '../persistence/repository/user.repository';

@Injectable()
export class UserService {
  constructor(readonly userRepository: UserRepository) {}
  getHello(): string {
    return this.userRepository.getHello();
  }
}

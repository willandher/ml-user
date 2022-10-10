import { Injectable } from '@nestjs/common';
import { UserRepository } from '../persistence/repository/user.repository';
import { UserDto } from '../dto/user.dto';
import { userEntityToUserDto } from '../helper/UserMapper';

@Injectable()
export class UserService {
  constructor(readonly userRepository: UserRepository) {}
  async getUser(): Promise<UserDto> {
    return await this.userRepository.get(null).then(userEntityToUserDto);
  }

  async getLevel(level: string): Promise<any> {
    return await this.userRepository.getLevel(level);
  }
}

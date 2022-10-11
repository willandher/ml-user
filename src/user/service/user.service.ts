import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repository/user.repository';
import { UserDto } from '../dto/user.dto';
import { userEntityToUserDto } from '../helper/UserMapper';

@Injectable()
export class UserService {
  constructor(readonly userRepository: UserRepository) {}
  async getUser(): Promise<UserDto> {
    return await this.userRepository.getUser(null).then(userEntityToUserDto);
  }

  async getLevel(level: string): Promise<any> {
    return await this.userRepository.getLevel(level);
  }

  async getPurcharse(userId: number, limit = 10, offset = 0): Promise<any> {
    return await this.userRepository.getPurcharseByUserId(
      userId,
      limit,
      offset,
    );
  }
  async getRestrictionsByUser(id: number) {
    return this.userRepository.getRestrictionsByUser(id);
  }
}

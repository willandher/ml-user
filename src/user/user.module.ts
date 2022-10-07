import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './api/user.controller';
import { UserRepository } from './persistence/repository/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}

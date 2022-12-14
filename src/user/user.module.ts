import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './api/user.controller';
import { UserRepository } from './database/repository/user.repository';
import { AdapterModule } from '../shared/http-adapter/adapter.module';

@Module({
  imports: [AdapterModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}

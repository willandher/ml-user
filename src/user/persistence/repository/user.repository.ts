import { Injectable, Logger } from '@nestjs/common';
import { HttpServiceAdapter } from '../../../shared/http-adapter/http-service.adapter';
import { UserEntity } from '../model/user.entity';
import { IRepository } from '../i-repository';

@Injectable()
export class UserRepository implements IRepository {
  private readonly hostMock = process.env.HOST_MOCK;
  private readonly logger = new Logger(UserRepository.name);
  constructor(readonly httpServiceAdapter: HttpServiceAdapter) {}
  getHello(): Promise<UserEntity> {
    this.logger.log({ id: 'testing' }, 'esto es una prueba de loggin');
    return this.httpServiceAdapter.requestGet(`${this.hostMock}/get/user`);
  }

  get(id: number): Promise<UserEntity> {
    this.logger.log({ id: 'testing' }, 'esto es una prueba de loggin');
    return this.httpServiceAdapter.requestGet(`${this.hostMock}/get/user`);
  }
}

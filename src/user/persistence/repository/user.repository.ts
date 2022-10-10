import { Injectable, Logger } from '@nestjs/common';
import { HttpServiceAdapter } from '../../../shared/http-adapter/http-service.adapter';
import { UserEntity } from '../model/user.entity';

@Injectable()
export class UserRepository {
  private readonly hostMock = process.env.HOST_MOCK;
  private readonly logger = new Logger(UserRepository.name);
  constructor(readonly httpServiceAdapter: HttpServiceAdapter) {}
  getUser(id: number): Promise<UserEntity> {
    this.logger.log({ id: 'testing' }, 'esto es una prueba de loggin');
    return this.httpServiceAdapter.requestGet(`${this.hostMock}/users`);
  }
  getLevel(level: string): Promise<any> {
    this.logger.log('get level');
    return this.httpServiceAdapter.requestGet(
      `${this.hostMock}/levels/${level}`,
    );
  }

  getPurcharseByUserId(
    userId: number,
    limit?: number,
    offset?: number,
  ): Promise<any> {
    this.logger.log('get Purcharse');
    return this.httpServiceAdapter.requestGet(
      `${this.hostMock}/users/${userId}/purcharses/${limit}/${offset}`,
    );
  }
  getRestrictionsByUser(id: number) {
    this.logger.log('get restrictions by user');
    return this.httpServiceAdapter.requestGet(
      `${this.hostMock}/users/${id}/restrictions`,
    );
  }
}

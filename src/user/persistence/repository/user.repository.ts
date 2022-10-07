import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private readonly logger = new Logger(UserRepository.name);
  getHello(): string {
    this.logger.log({ id: 'testing' }, 'esto es una prueba de loggin');
    return 'hello world repository';
  }
}

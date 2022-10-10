import { UserEntity } from './model/user.entity';

export interface IRepository {
  get(id: number): Promise<UserEntity>;
}

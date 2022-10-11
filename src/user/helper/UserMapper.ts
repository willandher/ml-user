import { UserEntity } from '../database/model/user.entity';
import { UserDto } from '../dto/user.dto';

export const userEntityToUserDto = (userEntity: UserEntity): UserDto => {
  return {
    id: userEntity.id_usuario,
    name: userEntity.nombre,
    lastName: userEntity.apellido,
    level: userEntity.nivel,
    image: userEntity.imagen,
  };
};

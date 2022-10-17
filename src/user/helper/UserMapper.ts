import { UserEntity } from '../database/model/user.entity';
import { UserDto } from '../dto/user.dto';
import { UserRestrictionsEntity } from "../database/model/user-restrictions.entity";
import { UserRestrictionDto } from "../dto/user.restriction.dto";

export const userEntityToUserDto = (userEntity: UserEntity): UserDto => {
  return {
    id: userEntity.id_usuario,
    name: userEntity.nombre,
    lastName: userEntity.apellido,
    level: userEntity.nivel,
    image: userEntity.imagen,
  };
};

export const userRestrictions = (
  userRestrictions: UserRestrictionsEntity[],
): UserRestrictionDto[] => {
  return userRestrictions.map((userRestrictions) => {
    return {
      type: userRestrictions.tipo,
      menssage: userRestrictions.mensaje,
    };
  });
};

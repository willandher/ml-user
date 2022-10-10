import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  getUser(@Param('id') id): Promise<UserDto> {
    return this.userService.getUser();
  }

  /**
   * Esto podria manejarse mejor con un catalogo de maestros, por objetos de pruebas e manejara aqui.
   * @param level
   */
  @Get('/levels/:idLevel')
  getLevel(@Param('idLevel') level): Promise<any> {
    return this.userService.getLevel(level);
  }
}

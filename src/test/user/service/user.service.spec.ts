import { UserRepository } from '../../../user/database/repository/user.repository';
import { UserService } from '../../../user/service/user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AdapterModule } from '../../../shared/http-adapter/adapter.module';

describe('User Service', () => {
  let service: UserRepository;
  let ticketingDmfoService: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[AdapterModule],
      providers: [UserRepository, UserService],
    }).compile();
    ticketingDmfoService = module.get<UserService>(UserService);
    service = module.get<UserRepository>(UserRepository);
  });

  it('get purcharse', async () => {
    const resultMock = { id: 'testing' };
    jest
      .spyOn(service, 'getPurcharseByUserId')
      .mockImplementationOnce((): Promise<any> => {
        return Promise.resolve(resultMock);
      });
    const result = await ticketingDmfoService.getPurcharse(1, 1, 1);
    expect(resultMock).toStrictEqual(result);
  });
});

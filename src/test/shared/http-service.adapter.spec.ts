import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import axios from 'axios';
import { HttpServiceAdapter } from '../../shared/http-adapter/http-service.adapter';

jest.mock('axios');
describe('TicketingService', () => {
  let service: HttpServiceAdapter;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [HttpServiceAdapter],
    }).compile();

    service = module.get<HttpServiceAdapter>(HttpServiceAdapter);
    httpService = module.get<HttpService>(HttpService);
    let save: any;
    // eslint-disable-next-line prefer-const
    save = jest.fn();
    httpService.get = jest.fn().mockReturnValue({ save });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('get info about ticketing', () => {
    let save: any;

    beforeEach(() => {
      save = jest.fn();
      httpService.get = jest.fn().mockReturnValue({ save });
    });

    it('request get', async () => {
      const result = {};
      const response: AxiosResponse = {
        data: result,
        headers: {},
        config: { url: 'http://localhost:9090/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(response));
      expect(await service.requestGet('')).toBe(result);
    });
  });
});

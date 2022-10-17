import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import ignoreSsl from '../ignore-ssl';

@Injectable()
export class HttpServiceAdapter {
  constructor(private readonly httpService: HttpService) {}

  async requestGet(host: string, config?): Promise<any> {
    return lastValueFrom(
      this.httpService.get(host, {
        httpsAgent: ignoreSsl,
        ...config,
      }),
    )
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        throw new err();
      });
  }

  async requestPost(
    host: string,
    body: any,
    config?,
    trackId?: string,
  ): Promise<any> {
    return lastValueFrom(this.httpService.post(host, { ...config }, body))
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
}

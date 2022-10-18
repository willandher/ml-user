import { AdapterModule } from '../../shared/http-adapter/adapter.module';
import { HttpServiceAdapter } from '../../shared/http-adapter/http-service.adapter';
import { Test } from '@nestjs/testing';

describe('AdapterModule', () => {
  it('Should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [AdapterModule],
    }).compile();
    expect(module).toBeDefined();
    expect(module.get(HttpServiceAdapter)).toBeInstanceOf(HttpServiceAdapter);
  });
});

import { Module } from '@nestjs/common';
import { HttpServiceAdapter } from './http-service.adapter';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [HttpServiceAdapter],
  exports: [HttpServiceAdapter, HttpModule],
})
export class AdapterModule {}

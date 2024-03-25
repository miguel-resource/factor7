import { Module } from '@nestjs/common';
import { MainClientsService } from './main-clients.service';
import { MainClientsController } from './main-clients.controller';

@Module({
  controllers: [MainClientsController],
  providers: [MainClientsService],
})
export class MainClientsModule {}

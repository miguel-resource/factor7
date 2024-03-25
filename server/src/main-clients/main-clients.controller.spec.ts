import { Test, TestingModule } from '@nestjs/testing';
import { MainClientsController } from './main-clients.controller';
import { MainClientsService } from './main-clients.service';

describe('MainClientsController', () => {
  let controller: MainClientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainClientsController],
      providers: [MainClientsService],
    }).compile();

    controller = module.get<MainClientsController>(MainClientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

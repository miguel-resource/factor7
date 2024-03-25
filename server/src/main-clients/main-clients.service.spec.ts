import { Test, TestingModule } from '@nestjs/testing';
import { MainClientsService } from './main-clients.service';

describe('MainClientsService', () => {
  let service: MainClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainClientsService],
    }).compile();

    service = module.get<MainClientsService>(MainClientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

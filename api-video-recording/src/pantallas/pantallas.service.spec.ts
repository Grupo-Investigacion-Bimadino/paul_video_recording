import { Test, TestingModule } from '@nestjs/testing';
import { PantallasService } from './pantallas.service';

describe('PantallasService', () => {
  let service: PantallasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PantallasService],
    }).compile();

    service = module.get<PantallasService>(PantallasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

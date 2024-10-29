import { Test, TestingModule } from '@nestjs/testing';
import { GrabacionesService } from './grabaciones.service';

describe('GrabacionesService', () => {
  let service: GrabacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrabacionesService],
    }).compile();

    service = module.get<GrabacionesService>(GrabacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

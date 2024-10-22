import { Test, TestingModule } from '@nestjs/testing';
import { AudiosService } from './audios.service';

describe('AudiosService', () => {
  let service: AudiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudiosService],
    }).compile();

    service = module.get<AudiosService>(AudiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

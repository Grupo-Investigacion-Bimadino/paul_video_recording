import { Test, TestingModule } from '@nestjs/testing';
import { ArchivosController } from './archivos.controller';
import { ArchivosService } from './archivos.service';

describe('ArchivosController', () => {
  let controller: ArchivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchivosController],
      providers: [ArchivosService],
    }).compile();

    controller = module.get<ArchivosController>(ArchivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

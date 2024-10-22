import { Test, TestingModule } from '@nestjs/testing';
import { PantallasController } from './pantallas.controller';
import { PantallasService } from './pantallas.service';

describe('PantallasController', () => {
  let controller: PantallasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PantallasController],
      providers: [PantallasService],
    }).compile();

    controller = module.get<PantallasController>(PantallasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

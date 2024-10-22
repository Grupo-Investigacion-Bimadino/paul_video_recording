import { Module } from '@nestjs/common';
import { PantallasService } from './pantallas.service';
import { PantallasController } from './pantallas.controller';

@Module({
  controllers: [PantallasController],
  providers: [PantallasService],
})
export class PantallasModule {}

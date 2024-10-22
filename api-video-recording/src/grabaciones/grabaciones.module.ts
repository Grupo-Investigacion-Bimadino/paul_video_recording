import { Module } from '@nestjs/common';
import { GrabacionesService } from './grabaciones.service';
import { GrabacionesController } from './grabaciones.controller';

@Module({
  controllers: [GrabacionesController],
  providers: [GrabacionesService],
})
export class GrabacionesModule {}

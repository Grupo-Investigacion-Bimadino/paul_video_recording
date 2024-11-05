import { Module } from '@nestjs/common';
import { GrabacionesService } from './grabaciones.service';
import { GrabacionesController } from './grabaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Grabacion, GrabacionSchema } from './schemas/grabaciones.schema';

@Module({
  imports: [
    
    MongooseModule.forFeature([{ name: Grabacion.name, schema: GrabacionSchema }])
  ],
  controllers: [GrabacionesController],
  providers: [GrabacionesService],
})
export class GrabacionesModule {}

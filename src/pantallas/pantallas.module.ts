import { Module } from '@nestjs/common';
import { PantallasService } from './pantallas.service';
import { PantallasController } from './pantallas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pantalla, PantallaSchema } from './schemas/pantallas.schema';

@Module({
  imports: [
    
    MongooseModule.forFeature([{ name: Pantalla.name, schema: PantallaSchema }])
  ],
  controllers: [PantallasController],
  providers: [PantallasService],
})
export class PantallasModule {}

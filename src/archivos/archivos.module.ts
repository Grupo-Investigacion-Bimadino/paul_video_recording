import { Module } from '@nestjs/common';
import { ArchivosService } from './archivos.service';
import { ArchivosController } from './archivos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Archivo, ArchivoSchema } from './schemas/archivos.schemas';

@Module({
  imports: [
    
    MongooseModule.forFeature([{ name: Archivo.name, schema: ArchivoSchema }])
  ],
  controllers: [ArchivosController],
  providers: [ArchivosService],
})
export class ArchivosModule {}

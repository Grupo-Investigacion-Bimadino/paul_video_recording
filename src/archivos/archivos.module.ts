import { Module } from '@nestjs/common';
import { ArchivosService } from './archivos.service';
import { ArchivosController } from './archivos.controller';

@Module({
  controllers: [ArchivosController],
  providers: [ArchivosService],
})
export class ArchivosModule {}

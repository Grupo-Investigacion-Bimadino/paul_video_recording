import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArchivosModule } from './archivos/archivos.module';
import { AudiosModule } from './audios/audios.module';
import { PantallasModule } from './pantallas/pantallas.module';
import { GrabacionesModule } from './grabaciones/grabaciones.module';

@Module({
  imports: [ArchivosModule, AudiosModule, PantallasModule, GrabacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

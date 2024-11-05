import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArchivosModule } from './archivos/archivos.module';
import { AudiosModule } from './audios/audios.module';
import { PantallasModule } from './pantallas/pantallas.module';
import { GrabacionesModule } from './grabaciones/grabaciones.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://cbricenoojeda42:GMAPA0ZTviZLWqyg@cluster0.avxwc.mongodb.net/db_video_recording?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ArchivosModule,
    AudiosModule,
    PantallasModule,
    GrabacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

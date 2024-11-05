import { Module } from '@nestjs/common';
import { AudiosService } from './audios.service';
import { AudiosController } from './audios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Audio, AudioSchema } from './schemas/audios.schema';

@Module({
  imports: [
    
    MongooseModule.forFeature([{ name: Audio.name, schema: AudioSchema }])
  ],
  controllers: [AudiosController],
  providers: [AudiosService],
})
export class AudiosModule {}

import { Module } from '@nestjs/common';
import { AudiosService } from './audios.service';
import { AudiosController } from './audios.controller';

@Module({
  controllers: [AudiosController],
  providers: [AudiosService],
})
export class AudiosModule {}

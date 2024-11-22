import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
import { Audio } from './schemas/audios.schema';

@Injectable()
export class AudiosService {
  constructor(
    @InjectModel(Audio.name) private audioModel: Model<Audio>) {}
  create(createAudioDto: CreateAudioDto) {
    const createdAudio = new this.audioModel(createAudioDto);
    return createdAudio.save();
  }

  findAll() {
    return [
      {
        "id": 1,
        "formato": "mp3",
        "duracion": 180,
        "timestampInicio": 1620303030,
        "timestampPausa": 1620303200,
        "timestampFinalizacion": 1620303330,
        "palabrasClaves": ["audio", "grabacion", "clase"],
        "grabacionId": 101
      },
      {
        "id": 2,
        "formato": "wav",
        "duracion": 240,
        "timestampInicio": 1620304030,
        "timestampPausa": 1620304230,
        "timestampFinalizacion": 1620304430,
        "palabrasClaves": ["entrevista", "podcast", "audio"],
        "grabacionId": 102
      }
    ]
    ;
  }

  findOne(id: number) {
    return  {
      "id": 1,
      "formato": "wav",
      "duracion": 240,
      "timestampInicio": 1620304030,
      "timestampPausa": 1620304230,
      "timestampFinalizacion": 1620304430,
      "palabrasClaves": ["entrevista", "podcast", "audio"],
      "grabacionId": 102
    };
  }

  update(id: number, updateAudioDto: UpdateAudioDto) {
    return {id: id,
      ...updateAudioDto,
    };;
  }

  remove(id: number) {
    return {id,};
  }
}

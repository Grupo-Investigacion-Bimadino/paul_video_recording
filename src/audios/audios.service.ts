import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';

@Injectable()
export class AudiosService {
  create(createAudioDto: CreateAudioDto) {
    return createAudioDto;
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

import { Injectable } from '@nestjs/common';
import { CreateGrabacioneDto } from './dto/create-grabacione.dto';
import { UpdateGrabacioneDto } from './dto/update-grabacione.dto';

@Injectable()
export class GrabacionesService {
  create(createGrabacioneDto: CreateGrabacioneDto) {
    return createGrabacioneDto;
  }

  findAll() {
    return [
      {
        "id": 101,
        "formato": "mp4",
        "duracion": 3600,
        "area": 500,
        "timestampInicio": 1620303030,
        "timestampPausa": 1620303200,
        "timestampFinalizacion": 1620306630,
        "tipo": "clase",
        "estado": "completa",
        "palabrasClaves": ["clase", "curso", "video"],
        fecha: {
          dia: 3,
          mes: 5,
          anio: 2021,
          hora: 10,
          minuto: 15,
          segundo: 0
        },
        pantallaId: 301
      },
      {
        id: 102,
        formato: "avi",
        duracion: 5400,
        area: 700,
        timestampInicio: 1620304030,
        timestampPausa: 1620304200,
        timestampFinalizacion: 1620309430,
        tipo: "entrevista",
        estado: "completa",
        palabrasClaves: ["entrevista", "podcast", "video"],
        fecha: {
          dia: 4,
          mes: 5,
          anio: 2021,
          hora: 14,
          minuto: 30,
          segundo: 0
        },
        "pantallaId": 302
      }
    ];
  }

  findOne(id: number) {
    return  {
      "id": 102,
      "formato": "avi",
      "duracion": 5400,
      "area": 700,
      "timestampInicio": 1620304030,
      "timestampPausa": 1620304200,
      "timestampFinalizacion": 1620309430,
      "tipo": "entrevista",
      "estado": "completa",
      "palabrasClaves": ["entrevista", "podcast", "video"],
      "fecha": {
        "dia": 4,
        "mes": 5,
        "anio": 2021,
        "hora": 14,
        "minuto": 30,
        "segundo": 0
      },
      "pantallaId": 302
    };
  }

  update(id: number, updateGrabacioneDto: UpdateGrabacioneDto) {
    return {id: id,
      ...updateGrabacioneDto,
    };
  }

  remove(id: number) {
    return {id,};
  }
}

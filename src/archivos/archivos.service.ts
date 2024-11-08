import { Injectable } from '@nestjs/common';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';

@Injectable()
export class ArchivosService {
  create(createArchivoDto: CreateArchivoDto) {
    return createArchivoDto;
  }

  findAll() {
    return [
      {
        "id": 1,
        "nombre": "nombreArchivo1",
        "ruta": "/ruta/archivo1",
        "tamano": 12345,
        "descripcion": "Descripción del archivo 1",
        "grabacionId": 101,
        "audioId": 201
      },
      {
        "id": 2,
        "nombre": "nombreArchivo2",
        "ruta": "/ruta/archivo2",
        "tamano": 23456,
        "descripcion": "Descripción del archivo 2",
        "grabacionId": 102,
        "audioId": 202
      }
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} archivo`;
  }

  update(id: number, updateArchivoDto: UpdateArchivoDto) {
    return `This action updates a #${id} archivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} archivo`;
  }
}

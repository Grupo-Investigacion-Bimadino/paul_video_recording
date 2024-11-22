import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePantallaDto } from './dto/create-pantalla.dto';
import { UpdatePantallaDto } from './dto/update-pantalla.dto';
import { Pantalla } from './schemas/pantallas.schema';

@Injectable()
export class PantallasService {
  constructor(
    @InjectModel(Pantalla.name) private pantallaModel: Model<Pantalla>, // Inyectar el modelo de Mongoose
  ) {}

  create(createPantallaDto: CreatePantallaDto) {
    const createdPantalla = new this.pantallaModel(createPantallaDto);
    return createdPantalla.save();
  }

  findAll() {
    return [
      {
        "id": 1,
        "ancho": 1920,
        "alto": 1080,
        "iniX": 0,
        "iniY": 0,
        "finX": 1920,
        "finY": 1080
      },
      {
        "id": 2,
        "ancho": 2560,
        "alto": 1440,
        "iniX": 0,
        "iniY": 0,
        "finX": 2560,
        "finY": 1440
      }
    ];
  }

  findOne(id: number) {
    return  {
      "id": 2,
      "ancho": 2560,
      "alto": 1440,
      "iniX": 0,
      "iniY": 0,
      "finX": 2560,
      "finY": 1440
    };
  }

  update(id: number, updatePantallaDto: UpdatePantallaDto) {
    return {id: id,
      ...updatePantallaDto,
    };
  }

  remove(id: number) {
    return {id,};
  }
}

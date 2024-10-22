import { Injectable } from '@nestjs/common';
import { CreatePantallaDto } from './dto/create-pantalla.dto';
import { UpdatePantallaDto } from './dto/update-pantalla.dto';

@Injectable()
export class PantallasService {
  create(createPantallaDto: CreatePantallaDto) {
    return 'This action adds a new pantalla';
  }

  findAll() {
    return `This action returns all pantallas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pantalla`;
  }

  update(id: number, updatePantallaDto: UpdatePantallaDto) {
    return `This action updates a #${id} pantalla`;
  }

  remove(id: number) {
    return `This action removes a #${id} pantalla`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateGrabacioneDto } from './dto/create-grabacione.dto';
import { UpdateGrabacioneDto } from './dto/update-grabacione.dto';

@Injectable()
export class GrabacionesService {
  create(createGrabacioneDto: CreateGrabacioneDto) {
    return 'This action adds a new grabacione';
  }

  findAll() {
    return `This action returns all grabaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grabacione`;
  }

  update(id: number, updateGrabacioneDto: UpdateGrabacioneDto) {
    return `This action updates a #${id} grabacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} grabacione`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrabacionesService } from './grabaciones.service';
import { CreateGrabacioneDto } from './dto/create-grabacione.dto';
import { UpdateGrabacioneDto } from './dto/update-grabacione.dto';

@Controller('grabaciones')
export class GrabacionesController {
  constructor(private readonly grabacionesService: GrabacionesService) {}

  @Post()
  create(@Body() createGrabacioneDto: CreateGrabacioneDto) {
    return this.grabacionesService.create(createGrabacioneDto);
  }

  @Get()
  findAll() {
    return this.grabacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grabacionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrabacioneDto: UpdateGrabacioneDto) {
    return this.grabacionesService.update(id, updateGrabacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grabacionesService.remove(id);
  }
}

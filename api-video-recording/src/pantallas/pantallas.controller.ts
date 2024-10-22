import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PantallasService } from './pantallas.service';
import { CreatePantallaDto } from './dto/create-pantalla.dto';
import { UpdatePantallaDto } from './dto/update-pantalla.dto';

@Controller('pantallas')
export class PantallasController {
  constructor(private readonly pantallasService: PantallasService) {}

  @Post()
  create(@Body() createPantallaDto: CreatePantallaDto) {
    return this.pantallasService.create(createPantallaDto);
  }

  @Get()
  findAll() {
    return this.pantallasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pantallasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePantallaDto: UpdatePantallaDto) {
    return this.pantallasService.update(+id, updatePantallaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pantallasService.remove(+id);
  }
}

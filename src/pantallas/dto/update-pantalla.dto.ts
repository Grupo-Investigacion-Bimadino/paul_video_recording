import { PartialType } from '@nestjs/mapped-types';
import { CreatePantallaDto } from './create-pantalla.dto';

export class UpdatePantallaDto extends PartialType(CreatePantallaDto) {}

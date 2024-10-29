import { PartialType } from '@nestjs/mapped-types';
import { CreateGrabacioneDto } from './create-grabacione.dto';

export class UpdateGrabacioneDto extends PartialType(CreateGrabacioneDto) {}

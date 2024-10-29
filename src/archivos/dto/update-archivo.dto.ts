import { PartialType } from '@nestjs/mapped-types';
import { CreateArchivoDto } from './create-archivo.dto';

export class UpdateArchivoDto extends PartialType(CreateArchivoDto) {}

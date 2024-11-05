import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Archivo extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  ruta: string;

  @Prop()
  tamano: number;

  @Prop()
  descripcion: string;

  @Prop({ required: true })
  grabacionId: number;

  @Prop({ required: true })
  audioId: number;
}

export const ArchivoSchema = SchemaFactory.createForClass(Archivo);

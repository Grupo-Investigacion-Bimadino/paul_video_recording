import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pantalla extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  ancho: number;

  @Prop({ required: true })
  alto: number;

  @Prop({ required: true })
  iniX: number;

  @Prop({ required: true })
  iniY: number;

  @Prop({ required: true })
  finX: number;

  @Prop({ required: true })
  finY: number;
}

export const PantallaSchema = SchemaFactory.createForClass(Pantalla);

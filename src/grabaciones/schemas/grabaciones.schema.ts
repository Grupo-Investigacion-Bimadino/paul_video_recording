import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Grabacion extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  formato: string;

  @Prop({ required: true })
  duracion: number;

  @Prop()
  area: number;

  @Prop({ required: true })
  timestampInicio: number;

  @Prop()
  timestampPausa: number;

  @Prop({ required: true })
  timestampFinalizacion: number;

  @Prop()
  tipo: string;

  @Prop()
  estado: string;

  @Prop([String])
  palabrasClaves: string[];

  @Prop({
    type: {
      dia: Number,
      mes: Number,
      anio: Number,
      hora: Number,
      minuto: Number,
      segundo: Number,
    },
  })
  fecha: {
    dia: number;
    mes: number;
    anio: number;
    hora: number;
    minuto: number;
    segundo: number;
  };

  @Prop({ required: true })
  pantallaId: number;
}

export const GrabacionSchema = SchemaFactory.createForClass(Grabacion);

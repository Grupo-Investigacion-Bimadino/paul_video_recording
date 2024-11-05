import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Audio extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  formato: string;

  @Prop({ required: true })
  duracion: number;

  @Prop({ required: true })
  timestampInicio: number;

  @Prop()
  timestampPausa: number;

  @Prop({ required: true })
  timestampFinalizacion: number;

  @Prop([String])
  palabrasClaves: string[];

  @Prop({ required: true })
  grabacionId: number;
}

export const AudioSchema = SchemaFactory.createForClass(Audio);

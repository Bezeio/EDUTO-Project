import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Information extends Document {
  @Prop()
  avatar: string;

  @Prop()
  description: string;

  @Prop()
  dob: string;
}

export const InformationSchema = SchemaFactory.createForClass(Information);

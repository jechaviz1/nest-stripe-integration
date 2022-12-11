import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  userName: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  hash: string;

  @Prop({
    required: true,
  })
  salt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  user_name: string;

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

  @Prop()
  customer_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

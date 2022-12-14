import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
// Schema for users in the payments api.
export class User {
  @Prop({
    required: true,
  })
  // The user's handle.
  user_name: string;

  @Prop({
    required: true,
  })
  // The user's email address.
  email: string;

  @Prop({
    required: true,
  })
  // The hashed and salted password.
  hash: string;

  @Prop({
    required: true,
  })
  // The salt used in password hashing.
  salt: string;

  @Prop()
  // Stripe customer id. This is created asynchronously after the user is
  // created by the create stripe customer cron job to avoid blocking signups
  // in the event of a Stripe API outage.
  customer_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

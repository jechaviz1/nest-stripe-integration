import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
  @Prop({
    required: true,
    index: true,
  })
  payment_intent_id: string;

  @Prop({
    required: true,
  })
  amount: number;

  @Prop({
    required: true,
  })
  currency: string;

  @Prop({
    required: true,
  })
  cuid: string;

  @Prop({
    required: true,
  })
  customer_id: string;

  @Prop({
    required: true,
  })
  user_id: string;

  @Prop({
    required: true,
  })
  status: string;

  @Prop()
  payment_method_id: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);

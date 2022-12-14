import { ApiProperty } from '@nestjs/swagger';
import { PaymentDocument } from '../schemas/payment.schema';

export class ReturnPaymentDto {
  @ApiProperty({
    example: 'pi_1H7jg1CZ6F7J6I8jW2Q2c2jG',
    description: 'Payment Intent ID.',
  })
  readonly id: string;

  @ApiProperty({
    example: 2000,
    description: 'Amount in cents.',
  })
  readonly amount: number;

  @ApiProperty({
    example: 'usd',
    description: 'Currency code. See https://stripe.com/docs/currencies.',
  })
  readonly currency: string;

  @ApiProperty({
    example: 'pending',
    description:
      'Payment Intent status. See https://stripe.com/docs/payments/payment-intents#intent-statuses.',
  })
  readonly status: string;

  @ApiProperty({
    example: 'pm_1H7jg1CZ6F7J6I8jW2Q2c2jG',
    description: 'Stripe payment method',
  })
  readonly paymentMethod: string;

  constructor(payment: PaymentDocument | any) {
    this.id = payment.id;
    this.amount = payment.amount;
    this.currency = payment.currency;
    this.status = payment.status;
    this.paymentMethod = payment.payment_method;
  }
}

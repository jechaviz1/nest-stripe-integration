import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty({
    example: 2000,
    description: 'Amount in cents',
  })
  readonly amount: number;

  @ApiProperty({
    example: 'usd',
    description: 'Currency code. See https://stripe.com/docs/currencies.',
  })
  readonly currency: string;

  @ApiProperty({
    example: 'cjld2cjxh0000qzrmn831i7rn',
    description:
      'CUID (collision resistant id) that identifies the user ' +
      'session. Use https://github.com/paralleldrive/cuid to generate them. ' +
      'This is used as an idempotency key for the payment intent creation. ' +
      'Thus, they should be unique foreach payment intent creation but ' +
      'remain constant between retries.',
  })
  readonly cuid: string;

  @ApiProperty({
    example: 'pm_card_visa',
    description: 'Payment method id.',
  })
  readonly paymentMethodId: string;
}

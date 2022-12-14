import { ApiProperty } from '@nestjs/swagger';

export class ConfirmPaymentDto {
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
    example: 'pi_1H4Q2cKZ4Z4Z4Z4Z4Z4Z4Z4Z',
    description: 'Payment intent id.',
  })
  readonly paymentId: string;

  @ApiProperty({
    example: 'pm_1H7jg1CZ6F7J6I8jW2Q2c2jG',
    description: 'Payment method id.',
  })
  readonly paymentMethodId: string;
}

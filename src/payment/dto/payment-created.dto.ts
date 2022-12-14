import { ReturnPaymentDto } from './return-payment.dto';
import { ApiProperty } from '@nestjs/swagger';

export class PaymentCreatedDto extends ReturnPaymentDto {
  @ApiProperty({
    example: 'Jreaw828oaooi3j3r',
    description: 'Client secret for the payment intent.',
  })
  readonly clientSecret: string;

  constructor(payment: any) {
    super(payment);

    this.clientSecret = payment.client_secret;
  }
}

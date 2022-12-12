import { PartialType } from '@nestjs/swagger';
import { CreatePaymentDto } from './payment-webhook';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}

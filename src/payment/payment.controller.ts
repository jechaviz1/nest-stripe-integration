import {
  Controller,
  Post,
  Body,
  Param,
  Request,
  Get,
  UseGuards,
} from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { ReturnPaymentDto } from './dto/return-payment.dto';
import { PaymentCreatedDto } from './dto/payment-created.dto';
import { PaymentService } from './payment.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('payment')
@ApiTags('Payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getPayments(@Request() req) {
    const { customerId } = req.user;

    const payments = await this.paymentService.findCustomerPayments(customerId);

    return payments.map((p) => new ReturnPaymentDto(p));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getPayment(@Request() req, @Param('id') id: string) {
    const { customerId } = req.user;

    const payment = await this.paymentService.findCustomerPayment(
      customerId,
      id,
    );

    return new ReturnPaymentDto(payment);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createPayment(
    @Request() req,
    @Body() createPaymentIntentDto: CreatePaymentDto,
  ) {
    const createdPayment = await this.paymentService.createPayment(
      req.user,
      createPaymentIntentDto,
    );

    return new PaymentCreatedDto(createdPayment);
  }

  @Post('/confirm')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async confirmPayment(
    @Request() req,
    @Body() confirmPaymentDto: ConfirmPaymentDto,
  ) {
    const confirmedPayment = await this.paymentService.confirmPayment(
      req.user,
      confirmPaymentDto,
    );

    return new ReturnPaymentDto(confirmedPayment);
  }
}

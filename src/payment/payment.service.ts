import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { ReturnUserDto } from '../user/dto/return-user.dto';
import { Payment, PaymentDocument } from './schemas/payment.schema';
import { StripeService } from '../stripe/stripe.service';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
    private readonly stripeService: StripeService,
  ) {}

  async createPayment(user: ReturnUserDto, createPaymentDto: CreatePaymentDto) {
    if (!user.customerId) {
      throw new NotFoundException('Customer not found.');
    }

    const stripePayment = await this.stripeService.createPayment(
      user.customerId,
    );

    await this.paymentModel.create({
      id: stripePayment.id,
      amount: stripePayment.amount,
      currency: stripePayment.currency,
      cuid: createPaymentDto.cuid,
      customer_id: user.customerId,
      user_id: user.userId,
      status: stripePayment.status,
      payment_method_id: stripePayment.payment_method,
    });

    return stripePayment;
  }

  async confirmPayment(
    user: ReturnUserDto,
    confirmPaymentDto: ConfirmPaymentDto,
  ) {
    await this.assertUserOwnsPayment(user, confirmPaymentDto.paymentId);

    const payment = await this.stripeService.confirmPayment(
      confirmPaymentDto.paymentId,
      confirmPaymentDto.paymentMethodId,
    );

    await this.paymentModel.findOneAndUpdate(
      { id: payment.id },
      { status: payment.status },
    );

    return payment;
  }

  async findCustomerPayments(customerId: string) {
    if (!customerId) {
      throw new NotFoundException('Customer not found.');
    }

    return this.stripeService.findCustomerPayments(customerId);
  }

  async findCustomerPayment(customerId: string, paymentId: string) {
    if (!customerId) {
      throw new NotFoundException('Customer not found.');
    }

    const payment = await this.stripeService.findCustomerPayment(
      customerId,
      paymentId,
    );

    if (!payment) {
      throw new NotFoundException('Payment not found.');
    }

    return payment;
  }

  async assertUserOwnsPayment(user: ReturnUserDto, paymentId: string) {
    const payment = await this.paymentModel.findOne({
      _id: paymentId,
      user_id: user.userId,
    });

    if (!payment) {
      throw new ForbiddenException();
    }
  }
}

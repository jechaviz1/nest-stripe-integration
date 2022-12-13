import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ReturnUserDto } from '../user/dto/return-user.dto';
import { Payment, PaymentDocument } from './schemas/payment.schema';
import { StripeService } from '../stripe/stripe.service';
import { UserService } from '../user/user.service';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
    private readonly stripeService: StripeService,
    private readonly userService: UserService,
  ) {}

  async createPayment(user: ReturnUserDto, createPaymentDto: CreatePaymentDto) {
    if (user.customerId === null) {
      const customer = await this.stripeService.createCustomer(
        user.email,
        user.userName,
      );

      user.customerId = customer.id;

      await this.userService.update(user.userId, {
        email: user.email,
        userName: user.userName,
        customerId: user.customerId,
      });
    }

    const createdPayment = await this.stripeService.createPayment(
      user.customerId,
      createPaymentDto,
    );

    return createdPayment;
  }

  async findCustomerPayments(customerId: string | undefined) {
    if (customerId) {
      return await this.stripeService.findCustomerPayments(customerId);
    }

    return [];
  }

  async findCustomerPayment(customerId: string | undefined, paymentId: string) {
    if (customerId) {
      await this.stripeService.findCustomerPayment(customerId, paymentId);
    }

    return null;
  }
}

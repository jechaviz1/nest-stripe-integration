import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { paymentConfig } from './constants';

@Injectable()
export class StripeService {
  readonly client: Stripe;

  constructor() {
    this.client = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2022-11-15',
    });
  }

  async createCustomer(email: string, userName: string) {
    return this.client.customers.create({ email, name: userName });
  }

  async createPayment(customerId: string) {
    return this.client.paymentIntents.create({
      customer: customerId,
      amount: paymentConfig.amount,
      currency: paymentConfig.currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });
  }

  async confirmPayment(paymentId: string, paymentMethodId: string) {
    return this.client.paymentIntents.confirm(paymentId, {
      payment_method: paymentMethodId,
    });
  }

  async findCustomerPayments(customerId: string) {
    return (await this.client.paymentIntents.list({ customer: customerId }))
      .data;
  }

  async findCustomerPayment(customerId: string, paymentId: string) {
    return (
      await this.client.paymentIntents.list({ customer: customerId })
    ).data.filter((p) => {
      return p.id === paymentId;
    })[0];
  }
}

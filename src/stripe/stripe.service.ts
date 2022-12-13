import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CreatePaymentDto } from '../payment/dto/create-payment.dto';

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

  async createPayment(customerId: string, createPayment: CreatePaymentDto) {
    return this.client.paymentIntents.create({
      customer: customerId,
      amount: createPayment.amount,
      currency: createPayment.currency,
      payment_method: createPayment.paymentMethodId,
      confirm: true,
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
      p.id === paymentId;
    });
  }

  async parsePaymentWebhook(signature: string, body: any) {
    let event;

    try {
      event = this.client.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (err) {
      console.log(err);
    }

    if (event?.type === 'payment_intent.succeeded') {
      return event.data.object;
    } else {
      return null;
    }
  }
}

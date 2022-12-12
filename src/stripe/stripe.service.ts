import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripeClient: Stripe;

  constructor() {
    this.stripeClient = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2022-11-15',
    });
  }

  async createCustomer(email: string, userName: string) {
    return this.stripeClient.customers.create({ email, name: userName });
  }

  async parsePaymentWebhook(signature: string, body: any) {
    let event;

    try {
      event = this.stripeClient.webhooks.constructEvent(
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

import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StripeService } from './stripe.service';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CreateStripeCustomersCron {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly stripeService: StripeService,
  ) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    const users = await this.userModel.find({ customer_id: null }, null, {
      limit: 10,
    });

    await Promise.all(
      users.map(async (user) => {
        const customer = await this.stripeService
          .createCustomer(user.email, user.user_name)
          .catch(() => null);

        await this.userModel
          .updateOne({ _id: user._id }, { customer_id: customer.id })
          .catch((err) => {
            console.log(
              `Error adding customerId ${customer.id} to user ${user._id}`,
              err,
            );
          });
      }),
    );
  }
}

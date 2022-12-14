import { Module } from '@nestjs/common';
import { CreateStripeCustomersCron } from './create-stripe-customers.cron';
import { User, UserSchema } from '../user/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { StripeService } from './stripe.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [StripeService, CreateStripeCustomersCron],
})
export class StripeModule {}

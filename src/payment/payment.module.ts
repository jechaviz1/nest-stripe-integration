import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { AuthModule } from '../auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { User, UserSchema } from '../user/schemas/user.schema';
import { StripeService } from '../stripe/stripe.service';

@Module({
  imports: [
    AuthModule,
    PassportModule,
    MongooseModule.forFeature([
      {
        name: Payment.name,
        schema: PaymentSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService, StripeService],
})
export class PaymentModule {}

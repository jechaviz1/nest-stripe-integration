import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PaymentModule } from './payment/payment.module';
import { ScheduleModule } from '@nestjs/schedule';
import { StripeModule } from './stripe/stripe.module';

// TODO use db con string from env
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule,
    PaymentModule,
    StripeModule,
  ],
})
export class AppModule {}

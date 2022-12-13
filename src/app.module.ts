import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PaymentModule } from './payment/payment.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';

// TODO use db con string from env
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    AuthModule,
    PaymentModule,
    PaymentMethodModule,
  ],
})
export class AppModule {}

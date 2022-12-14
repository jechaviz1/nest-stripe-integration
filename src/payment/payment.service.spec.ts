import { PaymentService } from './payment.service';
import { StripeService } from '../stripe/stripe.service';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { User, UserSchema } from '../user/schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import mongoose from 'mongoose';
import { Mongoose } from 'mongoose';

const DB_CON_STRING = 'mongodb://localhost/nest-test';

describe('PaymentService', () => {
  let service: PaymentService;
  let connection: Mongoose;

  beforeEach(async () => {
    connection = await mongoose.connect(DB_CON_STRING);

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
        MongooseModule.forRoot(DB_CON_STRING),
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
        PassportModule,
      ],
      providers: [PaymentService, StripeService, AuthService],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
  });

  describe('constructor', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
});

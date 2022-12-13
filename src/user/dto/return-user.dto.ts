import { ApiProperty } from '@nestjs/swagger';
import { UserDocument } from '../schemas/user.schema';

export class ReturnUserDto {
  @ApiProperty({
    example: '5f9f1c9b9c9c9c9c9c9c9c9c',
    description: `The user's id in Mongodb.`,
  })
  userId: string;

  @ApiProperty({
    example: 'Alan Turing',
    description: `The user's name.`,
  })
  userName: string;

  @ApiProperty({
    example: 'aturing@gmail.com',
    description: `The user's email address.`,
  })
  email: string;

  @ApiProperty({
    example: 'cus_1234567890',
    description:
      `The user's Stripe customer id. Users without transactions ` +
      `do not have a customer id.`,
  })
  customerId: string | null;

  constructor(user: UserDocument) {
    this.userId = user._id.toString();
    this.userName = user.userName;
    this.email = user.email;
    this.customerId = user.customerId || null;
  }
}

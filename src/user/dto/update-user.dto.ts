import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    example: 'Alan Turing',
    description: `The user's name.`,
  })
  @IsNotEmpty()
  readonly userName?: string;

  @ApiProperty({
    example: 'aturing@gmail.com',
    description: `The user's email address.`,
  })
  @IsEmail()
  readonly email?: string;

  @ApiProperty({
    example: 'cus_1234567890',
    description: `The user's Stripe customer id.`,
  })
  readonly customerId?: string;
}

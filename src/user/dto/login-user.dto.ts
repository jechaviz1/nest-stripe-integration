import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    example: 'aturing@gmail.com',
    description: `The user's email address.`,
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'password',
    description: `The user's password.`,
  })
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}

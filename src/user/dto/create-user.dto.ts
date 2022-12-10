import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly userName: string;

  @ApiProperty()
  readonly email: string;

  readonly password: string;
}

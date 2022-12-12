import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  readonly userName: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}

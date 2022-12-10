import { ApiProperty } from '@nestjs/swagger';

// TODO figure out what we actually need to update
export class UpdateUserDto {
  @ApiProperty()
  readonly userName: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}

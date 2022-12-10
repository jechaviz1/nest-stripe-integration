import { ApiProperty } from '@nestjs/swagger';
import { User } from '../schemas/user.schema';

export class ReturnUserDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  constructor(user: User) {
    this.userId = user._id.toString();
    this.userName = user.userName;
    this.email = user.email;
  }
}

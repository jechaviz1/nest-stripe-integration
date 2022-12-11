import { ApiProperty } from '@nestjs/swagger';
import { UserDocument } from '../schemas/user.schema';

export class ReturnUserDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  constructor(user: UserDocument) {
    this.userId = user._id.toString();
    this.userName = user.userName;
    this.email = user.email;
  }
}

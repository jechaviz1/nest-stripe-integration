import { Injectable } from '@nestjs/common';
import { User } from '../user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { PasswordUtil } from '../util/password.util';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private passwordUtil: PasswordUtil,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return null;
    }

    if (this.passwordUtil.comparePassword(password, user.hash, user.salt)) {
      return user;
    }

    return null;
  }

  async login(user: UserDocument) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

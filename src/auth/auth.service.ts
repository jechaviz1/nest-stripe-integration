import { Injectable } from '@nestjs/common';
import { User } from '../user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../user/schemas/user.schema';
import { passwordConstants } from './constants';
import { randomBytes, pbkdf2Sync } from 'crypto';
import { AuthGrantDto } from './dto/auth-grant.dto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  hashPassword(password: string): { salt: string; hash: string } {
    const salt = randomBytes(passwordConstants.saltLength).toString(`hex`);

    const hash = pbkdf2Sync(
      password,
      salt,
      passwordConstants.iterations,
      passwordConstants.keyLength,
      passwordConstants.hashAlgorithm,
    ).toString(`hex`);

    return {
      salt,
      hash,
    };
  }

  comparePassword(password: string, hash: string, salt: string): boolean {
    const reqHash = pbkdf2Sync(
      password,
      salt,
      passwordConstants.iterations,
      passwordConstants.keyLength,
      passwordConstants.hashAlgorithm,
    ).toString(`hex`);

    return reqHash === hash;
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return null;
    }

    if (this.comparePassword(password, user.hash, user.salt)) {
      return user;
    }

    return null;
  }

  login(user: UserDocument) {
    const payload = { email: user.email, sub: user._id };
    return new AuthGrantDto(
      this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
        expiresIn: jwtConstants.expiresIn,
      }),
    );
  }
}

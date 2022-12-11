import { Injectable } from '@nestjs/common';
import { passwordConstants } from '../constants';
import { randomBytes, pbkdf2Sync } from 'crypto';

@Injectable()
export class PasswordUtil {
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

  comparePassword(password: string, hash: string, salt: string) {
    const reqHash = pbkdf2Sync(
      password,
      salt,
      passwordConstants.iterations,
      passwordConstants.keyLength,
      passwordConstants.hashAlgorithm,
    ).toString(`hex`);

    return reqHash === hash;
  }
}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { AuthService } from '../auth/auth.service';
import { ConflictException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    await Promise.all([
      this.assertUniqueEmail(createUserDto.email),
      this.assertUniqueUsername(createUserDto.userName),
    ]);

    const { hash, salt } = this.authService.hashPassword(
      createUserDto.password,
    );

    const createdUser = await this.userModel.create({
      userName: createUserDto.userName,
      email: createUserDto.email,
      hash,
      salt,
    });

    return createdUser;
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }

  async findById(_id: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ _id });

    if (!user) {
      throw new NotFoundException(`User with _id ${_id} not found.`);
    }

    return user;
  }

  async update(
    _id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    const existingUser = await this.userModel.findOne({ _id });

    const checks = [];

    if (existingUser.email !== updateUserDto.email) {
      checks.push(this.assertUniqueEmail(updateUserDto.email));
    }

    if (existingUser.userName !== updateUserDto.userName) {
      checks.push(this.assertUniqueUsername(updateUserDto.userName));
    }

    await Promise.all(checks);

    return this.userModel.findByIdAndUpdate(_id, updateUserDto, {
      new: true,
    });
  }

  async remove(_id: string): Promise<UserDocument> {
    return this.userModel.findOneAndRemove({ _id });
  }

  async assertUniqueEmail(email: string): Promise<void> {
    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new ConflictException('Email already exists.');
    }
  }

  async assertUniqueUsername(userName: string): Promise<void> {
    const user = await this.userModel.findOne({ userName });

    if (user) {
      throw new ConflictException('Username already exists.');
    }
  }
}

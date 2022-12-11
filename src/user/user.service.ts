import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { PasswordUtil } from '../util/password.util';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly passwordUtil: PasswordUtil,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const { hash, salt } = this.passwordUtil.hashPassword(
      createUserDto.password,
    );

    const createdUser = new this.userModel({
      userName: createUserDto.userName,
      email: createUserDto.email,
      hash,
      salt,
    });

    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async findById(_id: string): Promise<UserDocument> {
    return this.userModel.findById(_id);
  }

  async findByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({
      email,
    });
  }

  async update(
    _id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(_id, updateUserDto, {
      new: true,
    });
  }

  async remove(_id: string): Promise<UserDocument> {
    return this.userModel.findByIdAndRemove(_id);
  }
}

import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/users/schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsersService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    async addUser(user : User) : Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
    async showAllUsers() : Promise<User[]>{
        return await this.userModel.find();
    }

    async getUser(userId: string) : Promise<User>{
        return await this.userModel.findById(userId);
    }

    // async updateUser(userId: string, oldUser : User) : Promise<string>{
    //     //const newUser = await this.userModel.findOneAndReplace({_id : userId}, oldUser)
    //     return "";
    // }
}

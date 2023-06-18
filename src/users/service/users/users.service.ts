import { Inject, Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/users/schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userCredentials } from 'src/users/userInfoDto';
import { OutletsService } from 'src/outlets/service/outlets/outlets.service';


@Injectable()
export class UsersService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    async addUser(user : User) : Promise<User> {
        user.type = 'user';
        const newUser = new this.userModel(user);
        return newUser.save();
    }
    async showAllUsers() : Promise<User[]>{
        return await this.userModel.find();
    }

    async getUser(userId: string) : Promise<User>{
        return await this.userModel.findById(userId);
    }

    async verifyUser(userCreds: userCredentials) : Promise<User>{
        const users:User[] = await this.userModel.find({emailId:userCreds.username, password:userCreds.password});
        return users[0];
    }

    // async updateUser(userId: string, oldUser : User) : Promise<string>{
    //     //const newUser = await this.userModel.findOneAndReplace({_id : userId}, oldUser)
    //     return "";
    // }
}

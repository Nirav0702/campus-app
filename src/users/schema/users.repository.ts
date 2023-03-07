import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./users.schema";

@Injectable()
export class UserRepository{
    constructor(@InjectModel(User.name) private userModel : Model<UserDocument>){}
}
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({collection : 'users'})
export class User{

    @Prop()
    name : string;

    @Prop()
    emailId : string;

    @Prop()
    phone: string;

    @Prop()
    age : number;

    @Prop()
    type : string;
}

export const UserSchema = SchemaFactory.createForClass(User);
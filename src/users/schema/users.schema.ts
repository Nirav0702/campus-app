import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({collection : 'users'})
export class User{
    // @Prop()
    // userId : string;

    @Prop()
    name : string;

    @Prop()
    emailId : string;

    @Prop()
    age : number;

    // @Prop([String])
    // documents : string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
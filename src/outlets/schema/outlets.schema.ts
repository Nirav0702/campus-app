import { IsEmail } from "@nestjs/class-validator";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OutletDocument = Outlet & Document;

@Schema({collection : 'outlets'})
export class Outlet{
    @Prop({required:true})
    name : string;

    @Prop({required:true, unique:true})

    @IsEmail()
    emailId : string;

    @Prop({required:true})
    phone : string;

    @Prop({required:true})
    upiId : string;
}

export const OutletSchema = SchemaFactory.createForClass(Outlet);
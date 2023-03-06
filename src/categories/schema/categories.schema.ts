import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

export type CategoryDocument = Category & Document;

@Schema({collection : 'categories'})
export class Category{
    @Prop({required : true})
    name : string;
    
    @Prop({required : true})
    categoryList : string[];

    @Prop()
    outletId : string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
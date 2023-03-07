import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ItemDocument = Item & Document;

@Schema({collection : 'items'})
export class Item{
    @Prop({required : true})
    itemName : string;

    @Prop({required : true})
    categoryId : string;

    @Prop({required : true})
    outletId : string;

    @Prop()
    description : string;

    @Prop()
    cost : number
}

export const ItemSchema = SchemaFactory.createForClass(Item);
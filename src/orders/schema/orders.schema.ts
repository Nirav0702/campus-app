import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import orderFoodContents, { orderStatus } from "../dto/ordersDto";

export type OrderDocument = Order & Document;

@Schema({collection : 'orders'})
export class Order{
    @Prop()
    id : string;

    @Prop({required : true})
    userId : string;

    @Prop({required : true})
    outletId : string;

    @Prop({required : true})
    orderContents : orderFoodContents[];

    @Prop()
    status : orderStatus

    @Prop()
    totalBillingAmout : number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
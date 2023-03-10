import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import orderFoodContents from "../dto/ordersDto";
import { Order, OrderDocument } from "../schema/orders.schema";

@Injectable()
export class OrderService{
    constructor(@InjectModel(Order.name) private orderModel : Model<OrderDocument>){}
    
    async showAllOrdersForAUser(userId : string) : Promise<Order[]>{
        return await this.orderModel.find({"userId" : userId})
    }

    async showOrder(orderId : string) : Promise<Order>{
        return await this.orderModel.findById(orderId);
    }

    async addOrder(order : Order) : Promise<Order>{
        const newOrder = new this.orderModel(order);
        return newOrder.save();
    }

    async computeTotalBillingAmount(orderContents : orderFoodContents[]) : Promise<number>{
        let totalBillingAmount = 0;
        const result = await Promise.all(orderContents.map(async orderContent => {
            totalBillingAmount = totalBillingAmount + orderContent.cost;
        }));
        return totalBillingAmount;
    }
}
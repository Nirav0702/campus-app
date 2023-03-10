import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { response } from "express";
import { Order } from "../schema/orders.schema";
import { OrderService } from "../service/orders.service";

@Controller('orders')
export class OrdersController{
    constructor(private orderService : OrderService){}

    @Get(':orderId')
    async getOrder(@Param("orderId") orderId : string) : Promise<Order>{
        return await this.orderService.showOrder(orderId);
    }

    @Post('addOrder/:userId/:outletId')
    async addOrder(@Param("userId") userId : string, @Param("outletId") outletId : string, @Body() order : Order, @Res() response){
        order.userId = userId;
        order.outletId = outletId;
        order.status = 'CONFIRMED';
        order.totalBillingAmout = await this.orderService.computeTotalBillingAmount(order.orderContents);
        const newOrder = await this.orderService.addOrder(order);
        return response.status(HttpStatus.CREATED).json({
            newOrder
        });
    }

    @Get('allOrdersOfUser/:userId')
    async getAllOrdersOfUser(@Param("userId") userId : string) : Promise<Order[]>{
        return await this.orderService.showAllOrdersForAUser(userId);
    }

}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { orderFoodContents } from '../dto/ordersDto';
import { Order, OrderDocument } from '../schema/orders.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async showAllOrdersForAUser(userId: string): Promise<any> {
    return await this.orderModel.aggregate([
      {
        $addFields: {
          convertedId: { $toObjectId: '$userId' },
          convertedOutletId: { $toObjectId: '$outletId' }
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'convertedId',
          foreignField: '_id',
          as: 'users',
        },
      },
      { $unwind: '$users' },
      {
        $lookup: {
          from: 'outlets',
          localField: 'convertedOutletId',
          foreignField: '_id',
          as: 'outlets',
        },
      },
      { $unwind: '$outlets' },
      {
        $match: {
          $and: [{ userId: userId }],
        },
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          outletId: 1,
          orderContents: 1,
          status: 1,
          totalBillingAmout: 1,
          userName: '$users.name',
          userPhone: '$users.phone',
          outletName: '$outlets.name',
          outletPhone: '$outlets.phone'
        },
      },
    ]);
  }

  async showOrder(orderId: string): Promise<Order> {
    return await this.orderModel.findById(orderId);
  }

  async addOrder(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  async computeTotalBillingAmount(
    orderContents: orderFoodContents[],
  ): Promise<number> {
    let totalBillingAmount = 0;
    const result = await Promise.all(
      orderContents.map(async (orderContent) => {
        totalBillingAmount =
          totalBillingAmount + orderContent.cost * orderContent.quantity;
      }),
    );
    return totalBillingAmount;
  }
}

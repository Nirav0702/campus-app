import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrdersController } from "./controller/orders.controller";
import { Order, OrderSchema } from "./schema/orders.schema";
import { OrderService } from "./service/orders.service";

@Module({
    imports: [MongooseModule.forFeature([{name : Order.name, schema: OrderSchema}])],
    controllers: [OrdersController],
    providers: [OrderService]
})

export class OrdersModule{}
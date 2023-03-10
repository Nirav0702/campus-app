import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { OutletsModule } from './outlets/outlets.module';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nirav_mongo:nirav_mongo17@cluster0.2hheqen.mongodb.net/test'), UsersModule, HomeModule, OutletsModule, CategoriesModule, ItemsModule, OrdersModule],
})
export class AppModule {}

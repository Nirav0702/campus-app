import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { OutletsModule } from './outlets/outlets.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nirav_mongo:nirav_mongo17@cluster0.2hheqen.mongodb.net/test'), UsersModule, HomeModule, OutletsModule, CategoriesModule],
})
export class AppModule {}

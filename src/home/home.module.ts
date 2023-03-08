import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/categories/schema/categories.schema';
import { CategoryService } from 'src/categories/service/categories/categories.service';
import { Item, ItemSchema } from 'src/items/schema/items.schema';
import { ItemService } from 'src/items/service/items/items.service';
import { Outlet, OutletSchema } from 'src/outlets/schema/outlets.schema';
import { OutletsService } from 'src/outlets/service/outlets/outlets.service';
import { HomeController } from './controllers/home/home.controller';

@Module({
  imports : [MongooseModule.forFeature([{name : Outlet.name, schema : OutletSchema}, {name : Category.name, schema : CategorySchema}, {name : Item.name, schema : ItemSchema}])],
  controllers: [HomeController],
  providers : [OutletsService, CategoryService, ItemService]
})
export class HomeModule {}

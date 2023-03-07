import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Outlet, OutletSchema } from 'src/outlets/schema/outlets.schema';
import { OutletsService } from 'src/outlets/service/outlets/outlets.service';
import { HomeController } from './controllers/home/home.controller';

@Module({
  imports : [MongooseModule.forFeature([{name : Outlet.name, schema : OutletSchema}])],
  controllers: [HomeController],
  providers : [OutletsService]
})
export class HomeModule {}

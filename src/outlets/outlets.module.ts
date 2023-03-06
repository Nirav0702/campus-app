import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { OutletsController } from "./controllers/outlets.controllers";
import { Outlet, OutletSchema } from "./schema/outlets.schema";
import { OutletsService } from "./service/outlets/outlets.service";


@Module({
    imports : [MongooseModule.forFeature([{name : Outlet.name, schema : OutletSchema}])],
    controllers : [OutletsController],
    providers : [OutletsService]
})
export class OutletsModule{}
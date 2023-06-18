import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Outlet, OutletDocument } from "src/outlets/schema/outlets.schema";

@Injectable()
export class OutletsService{
    constructor(@InjectModel(Outlet.name) private outletModel : Model<OutletDocument>){}
    async addOutlet(outlet : Outlet) : Promise<Outlet>{
        const newOutlet = new this.outletModel(outlet);
        return newOutlet.save();
    }
    async showAllOutlets() : Promise<Outlet[]>{
        return await this.outletModel.find();
    }
    async getUser(outletId: string) : Promise<Outlet>{
        return await this.outletModel.findById(outletId);
    }
}
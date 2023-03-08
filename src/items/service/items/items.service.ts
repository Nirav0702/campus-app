import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Item, ItemDocument } from "src/items/schema/items.schema";

@Injectable()
export class ItemService{
    constructor(@InjectModel(Item.name) private itemModel : Model<ItemDocument>){}
    
    async showAllItemsOfAParticularOutlet(outletId : string) : Promise<Item[]>{
        return await this.itemModel.find({"outletId" : outletId});
    }

    async showAllItemsOfAParticularCategory(categoryId : string) : Promise<Item[]>{
        return await this.itemModel.find({"categoryId" : categoryId});
    }

    async addItem(item : Item) : Promise<Item>{
        const newItem = new this.itemModel(item);
        return newItem.save();
    }
}
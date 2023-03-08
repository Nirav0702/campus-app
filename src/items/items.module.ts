import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ItemsController } from "./controllers/items.controller";
import { Item, ItemSchema } from "./schema/items.schema";
import { ItemService } from "./service/items/items.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
    controllers: [ItemsController],
    providers: [ItemService]
})

export class ItemsModule{}
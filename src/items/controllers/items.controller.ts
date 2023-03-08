import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { response } from "express";
import { Category } from "src/categories/schema/categories.schema";
import { Item } from "../schema/items.schema";
import { ItemService } from "../service/items/items.service";

@Controller()
export class ItemsController{
    constructor(private itemService : ItemService){}

    @Get('showItemsForOutlet/:outletId')
    async getItemsForOutlet(@Param("outletId") outletId : string) : Promise<Item[]>{
        return await this.itemService.showAllItemsOfAParticularOutlet(outletId);
    }

    @Get('showItemsForCategory/:categoryId')
    async getItemsForCategory(@Param("categoryId") categoryId : string) : Promise<Item[]>{
        return await this.itemService.showAllItemsOfAParticularCategory(categoryId);
    }

    @Post('addItems/:categoryId/:outletId')
    async addItem(@Param("categoryId") categoryId : string, @Param("outletId") outletId : string, @Res() response, @Body() item : Item) : Promise<Item>{
        item.categoryId = categoryId;
        item.outletId = outletId;
        const newItem = await this.itemService.addItem(item);
        return response.status(HttpStatus.CREATED).json({
            newItem
        });
    }
}


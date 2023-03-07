import { Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { response } from "express";
import { ObjectId } from "mongoose";
import { Outlet } from "src/outlets/schema/outlets.schema";
import { Category } from "../schema/categories.schema";
import { CategoryService } from "../service/categories/categories.service";

@Controller()
export class CategoriesController{
    constructor(private categoryService : CategoryService){}

    @Get(':outletId')
    async getCategories(@Param("outletId") outletId : string) : Promise<Category[]>{
        return await this.categoryService.showAllCategories(outletId);
    }

    @Post(':outletId')
    async addCategory(@Param("outletId") outletId : string, @Res() response, @Body() category : Category,) : Promise<Category>{
        category.outletId = outletId;
        const newCategory = await this.categoryService.addCategory(category);
        return response.status(HttpStatus.CREATED).json({
            newCategory
        });
    }

    // @Post(':outletId/:categoryId')
    // async editCategory(@Param("outletId") outletId : string, @Param("categoryId") categoryId : string) : Promise<Category>{
        
    // }
}
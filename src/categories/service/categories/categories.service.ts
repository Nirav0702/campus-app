import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "src/categories/schema/categories.schema";

@Injectable()
export class CategoryService{
    constructor(@InjectModel(Category.name) private categoryModel : Model<CategoryDocument>){}
    async showAllCategoriesOfOutlet(outletId : string) : Promise<Category[]>{
        return await this.categoryModel.find({"outletId" : outletId}).lean();
    }

    async addCategory(category : Category) : Promise<Category>{
        const newCategory = new this.categoryModel(category);
        return newCategory.save();
    }
}
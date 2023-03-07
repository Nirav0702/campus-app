import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoriesController } from "./controllers/categories.controller";
import { Category, CategorySchema } from "./schema/categories.schema";
import { CategoryService } from "./service/categories/categories.service";

@Module({
    imports : [MongooseModule.forFeature([{name : Category.name, schema : CategorySchema}])],
    controllers : [CategoriesController],
    providers : [CategoryService]
})

export class CategoriesModule{}
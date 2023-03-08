import { Controller, Get, Param } from '@nestjs/common';
import CategoryDto from 'src/categories/dto/categoriesDto';
import menuInterface from 'src/categories/interfaces/category.interface';
import { CategoryService } from 'src/categories/service/categories/categories.service';
import menuDto from 'src/home/dto/menuDto';
import { ItemService } from 'src/items/service/items/items.service';
import { Outlet } from 'src/outlets/schema/outlets.schema';
import { OutletsService } from 'src/outlets/service/outlets/outlets.service';

@Controller('home')
export class HomeController {
    constructor(private outletService : OutletsService, private categoryService : CategoryService, private itemService : ItemService){}
    
    @Get('showOutletsToUser/:userId')
    async getOutlets(@Param('userId') userId : string) : Promise<Outlet[]>{
        return await this.outletService.showAllOutlets();
    }

    @Get('getMenu/:outletId')
    async getMenuForOutlet(@Param('outletId') outletId : string) : Promise<menuInterface[]>{
        const categories : CategoryDto[] = await this.categoryService.showAllCategoriesOfOutlet(outletId);
        const menu = new menuDto();
        menu.contents = [];
        const result = await Promise.all(categories.map(async category => {
            const allItemsInCategory = await this.itemService.showAllItemsOfAParticularCategory(category._id);
            const eachCategory : menuInterface = {
                categoryName : category.name,
                items : allItemsInCategory
            }
            menu.contents.push(eachCategory)
        }));
        return menu.contents;        
    }
}

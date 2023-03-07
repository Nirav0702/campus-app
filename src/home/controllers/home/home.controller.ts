import { Controller, Get, Param } from '@nestjs/common';
import { Outlet } from 'src/outlets/schema/outlets.schema';
import { OutletsService } from 'src/outlets/service/outlets/outlets.service';

@Controller('home')
export class HomeController {
    constructor(private outletService : OutletsService){}
    @Get('showOutletsToUser/:userId')
    async getOutlets(@Param('userId') userId : string) : Promise<Outlet[]>{
        return await this.outletService.showAllOutlets();
    }
}

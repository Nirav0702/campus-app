import { Controller, Get, HttpStatus } from "@nestjs/common";
import { Body, Post, Res } from "@nestjs/common/decorators";
import { Outlet } from "../schema/outlets.schema";
import { OutletsService } from "../service/outlets/outlets.service";

@Controller('outlets')
export class OutletsController{
    constructor(private outletService : OutletsService){}

    @Get()
    async getOutlets() : Promise<Outlet[]>{
        return await this.outletService.showAllOutlets();
    }

    @Post()
    async addOutlets(@Res() response, @Body() outlet : Outlet){
        const newOutlet = await this.outletService.addOutlet(outlet);
        return response.status(HttpStatus.CREATED).json({
            newOutlet
        });
    }
}
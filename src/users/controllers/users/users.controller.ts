import { Body, Res, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { get } from 'http';
import { Http2ServerResponse } from 'http2';
import { User } from 'src/users/schema/users.schema';
import { UsersService } from 'src/users/service/users/users.service';
import userInfoDto from 'src/users/userInfoDto';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}

    @Get()
    async getUsers() : Promise<User[]>{
        return await this.userService.showAllUsers();
    }

    // @Get(':name')
    // getParticularUser(@Param('name') name:string){
    //     return this.userService.returnUserInfo(name);
    // }

    @Post()
    async addUser(@Res() response, @Body() user : User){
        const newUser = await this.userService.addUser(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        });
    }

    // @Patch()
    // async updateUser(@Res() response, @Body() user: User){
    //     return this.updateUser("userId", user)
    // }
}

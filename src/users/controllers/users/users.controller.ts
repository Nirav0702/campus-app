import { Body, Res, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { get } from 'http';
import { Http2ServerResponse } from 'http2';
import { User } from 'src/users/schema/users.schema';
import { UsersService } from 'src/users/service/users/users.service';
import { userCredentials } from 'src/users/userInfoDto';

@Controller()
export class UsersController {
    constructor(private userService : UsersService){}

    @Get('users')
    async getUsers() : Promise<User[]>{
        return await this.userService.showAllUsers();
    }

    // @Get(':name')
    // getParticularUser(@Param('name') name:string){
    //     return this.userService.returnUserInfo(name);
    // }

    @Post('users')
    async addUser(@Res() response, @Body() user : User){
        const newUser = await this.userService.addUser(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        });
    }

    @Get('users/getUserDetails/:userId')
    async getUserDetails(@Param("userId") userId: string) : Promise<User>{
        return await this.userService.getUser(userId);
    }

    @Post('users/login')
    async getUserToken(@Body() userCreds: userCredentials) : Promise<any>{
        const userDetails = await this.userService.verifyUser(userCreds)
        return {
            token: "AllowLogin",
            userId: userDetails.type == 'outlet' ? userDetails.outletId : userDetails._id,
            userType: userDetails.type
        };
    }

    // @Patch()
    // async updateUser(@Res() response, @Body() user: User){
    //     return this.updateUser("userId", user)
    // }
}

import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HomeController {
    @Get('')
    displayHome(){
        return 'Home';
    }
    @Get('users')
    displayUsers(){
        return ['User1', 'User2'];
    }
    @Get('user')
    displayUser(){
        return 'User1';
    }
}

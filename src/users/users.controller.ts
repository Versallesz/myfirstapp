import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService){

    }
    @Get('/users')
    @HttpCode(200)
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post('/users')
    createUser(@Body() user: CreateUserDto){
        return this.usersService.createUser(user)
    }
}

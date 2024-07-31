import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    private users: any = [
        { id: 1, name: 'John Doe', email: 'johndoe@gmail.com'},
        { id: 2, name: 'Jane Doe',  email: 'janedoe@gmail.com' },
        { id: 3, name: 'Alice Doe', email: 'alicedoe@gmail.com'}
    ]

    getUsers(){
        return this.users;
    }

    createUser(user : CreateUserDto){
        this.users.push(user)
        return {
            ...user,
            id: this.users.length + 1
        }
    }
}

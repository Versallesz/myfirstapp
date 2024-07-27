import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe', email: 'johndoe@gmail.com'},
        { id: 2, name: 'Jane Doe',  email: 'janedoe@gmail.com' },
        { id: 3, name: 'Alice Doe', email: 'alicedoe@gmail.com'}
    ]

    getUsers(){
        return this.users;
    }
}

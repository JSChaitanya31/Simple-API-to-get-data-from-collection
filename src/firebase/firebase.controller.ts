import { Controller, Get, Param } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
    constructor(private readonly firebaseService: FirebaseService) { }


    @Get(':users')
    async getCollectionData(@Param('users') users: string) {
        return await this.firebaseService.getCollectionData(users);
    }

}

import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';


@Module({
  imports: [FirebaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

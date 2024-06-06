import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformationModule } from './information/information.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { InformationController } from './information/information.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    InformationModule,
  ],
  controllers: [AppController, InformationController],
  providers: [AppService],
})
export class AppModule {}

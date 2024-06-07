import { Module } from "@nestjs/common";
import { InformationService } from "./information.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Information, InformationSchema } from "./schemas/information.schema";
import { InformationController } from "./information.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Information.name, schema: InformationSchema },
    ]),
  ],
  controllers: [InformationController],
  providers: [InformationService],
  exports: [InformationService],
})
export class InformationModule {}

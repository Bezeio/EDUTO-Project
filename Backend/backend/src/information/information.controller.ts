import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { InformationService } from "./information.service";
import { Information } from "./schemas/information.schema";

@Controller("information")
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Get()
  async getAllInformation(): Promise<Information[]> {
    return this.informationService.findAll();
  }

  @Post()
  async createInformation(
    @Body() information: Information,
  ): Promise<Information> {
    return this.informationService.create(information);
  }

  @Put(":id")
  async updateInformation(
    @Param("id") id: string,
    @Body() information: Information,
  ): Promise<Information> {
    return this.informationService.updateById(id, information);
  }
}

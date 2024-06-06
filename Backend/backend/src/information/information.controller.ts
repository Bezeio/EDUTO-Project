import { Body, Controller, Get, Post } from '@nestjs/common'
import { InformationService } from './information.service'
import { Information } from './schemas/information.schema'

@Controller('information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Get()
  async getAllInformation(): Promise<Information[]> {
    return this.informationService.findAll();
  }

  @Post()
  async createInformation(
    @Body() information: Information
  ): Promise<Information> {
    return this.informationService.create(information);
  }
}

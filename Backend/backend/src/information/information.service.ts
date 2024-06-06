import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Information } from './schemas/information.schema';

@Injectable()
export class InformationService {
  constructor(
    @InjectModel(Information.name)
    private informationModel: Model<Information>
  ) {}

  async findAll(): Promise<Information[]> {
    return this.informationModel.find().exec();
  }

  async create(information: Information): Promise<Information> {
    return this.informationModel.create(information);
  }
}

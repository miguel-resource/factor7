import { Injectable } from '@nestjs/common';
import { CreateMainClientDto } from './dto/create-main-client.dto';
import { UpdateMainClientDto } from './dto/update-main-client.dto';

@Injectable()
export class MainClientsService {
  create(createMainClientDto: CreateMainClientDto) {
    return 'This action adds a new mainClient';
  }

  findAll() {
    return `This action returns all mainClients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mainClient`;
  }

  update(id: number, updateMainClientDto: UpdateMainClientDto) {
    return `This action updates a #${id} mainClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} mainClient`;
  }
}

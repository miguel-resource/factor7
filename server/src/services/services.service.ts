import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  create(createServiceDto: CreateServiceDto) {
    return 'This action adds a new service';
  }

  findAll() {
    return [
      {
        id: 1,
        name: 'Service 1',
        description: 'Description 1',
        images: ['image1.jpg', 'image2.jpg'],
      },
      {
        id: 2,
        name: 'Service 2',
        description: 'Description 2',
        images: ['image3.jpg', 'image4.jpg'],
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}

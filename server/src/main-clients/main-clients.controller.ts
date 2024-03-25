import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MainClientsService } from './main-clients.service';
import { CreateMainClientDto } from './dto/create-main-client.dto';
import { UpdateMainClientDto } from './dto/update-main-client.dto';

@Controller('main-clients')
export class MainClientsController {
  constructor(private readonly mainClientsService: MainClientsService) {}

  @Post()
  create(@Body() createMainClientDto: CreateMainClientDto) {
    return this.mainClientsService.create(createMainClientDto);
  }

  @Get()
  findAll() {
    return this.mainClientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainClientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMainClientDto: UpdateMainClientDto) {
    return this.mainClientsService.update(+id, updateMainClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainClientsService.remove(+id);
  }
}

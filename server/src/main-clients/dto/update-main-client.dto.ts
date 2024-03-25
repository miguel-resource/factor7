import { PartialType } from '@nestjs/mapped-types';
import { CreateMainClientDto } from './create-main-client.dto';

export class UpdateMainClientDto extends PartialType(CreateMainClientDto) {}

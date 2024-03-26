import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class FaqService {
  create(createFaqDto: CreateFaqDto) {
    try {
      const data = fs.readFileSync(path.join(path.dirname(__dirname), '../data', 'faq.json'), 'utf-8');
      const faqs = JSON.parse(data);
      const newFaq = {
        id: faqs.length + 1,
        ...createFaqDto,
      };
      faqs.push(newFaq);
      fs.writeFileSync(path.join(path.dirname(__dirname), '../data', 'faq.json'), JSON.stringify(faqs, null, 2));
      return newFaq;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  findAll() {
    // return `This action returns all faq`;
    // 
    try {
      const data = fs.readFileSync(path.join(path.dirname(__dirname), '../data', 'faq.json'), 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  findOne(id: number) {
    try {
      const data = fs.readFileSync(path.join(path.dirname(__dirname), '../data', 'faq.json'), 'utf-8');
      const faqs = JSON.parse(data);
      return faqs.find((faq) => faq.id === id);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  update(id: number, updateFaqDto: UpdateFaqDto) {
    return `This action updates a #${id} faq`;
  }

  remove(id: number) {
    return `This action removes a #${id} faq`;
  }
}

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
    try {
      const data = fs.readFileSync(path.join(path.dirname(__dirname), '../data', 'faq.json'), 'utf-8');
      const faqs = JSON.parse(data);
      const index = faqs.findIndex((faq) => faq.id === id);
      faqs[index] = {
        ...faqs[index],
        ...updateFaqDto,
      };
      fs.writeFileSync(path.join(path.dirname(__dirname), '../data', 'faq.json'), JSON.stringify(faqs, null, 2));
      return faqs[index];
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  remove(id: number) {
    try {
      const data = fs.readFileSync(path.join(path.dirname(__dirname), '../data', 'faq.json'), 'utf-8');
      const faqs = JSON.parse(data);
      const filteredFaqs = faqs.filter((faq) => faq.id !== id);
      fs.writeFileSync(path.join(path.dirname(__dirname), '../data', 'faq.json'), JSON.stringify(filteredFaqs, null, 2));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  }
}

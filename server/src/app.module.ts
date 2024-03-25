import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { MainClientsModule } from './main-clients/main-clients.module';
import { AssociationsModule } from './associations/associations.module';
import { FaqModule } from './faq/faq.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ServicesModule, MainClientsModule, AssociationsModule, FaqModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

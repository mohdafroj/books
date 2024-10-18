import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

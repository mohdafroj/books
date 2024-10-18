import { Inject, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { PaginationDto } from './dto/pagination.dto';
@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
  ) {}

  async findAll(
    paginationDto: PaginationDto,
  ): Promise<{ result: Book[]; total: number }> {
    const { page, limit } = paginationDto;
    const [result, total] = await this.bookRepository.findAndCount({
      take: limit || 10,
      skip: (page - 1) * limit > 0 ? (page - 1) * limit : 0,
    });

    return { result: result, total };
  }

  async findOne(id: number): Promise<Book> {
    return this.bookRepository.findOneBy({ id });
  }

  async create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async update(id: number, book: Book): Promise<Book> {
    await this.bookRepository.update(id, book);
    return this.bookRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}

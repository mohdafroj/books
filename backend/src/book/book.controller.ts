import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { PaginationDto } from './dto/pagination.dto';
import { PaginateResponse } from 'src/utils/paginate.response';
import { SuccessResponse } from 'src/utils/success.response';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(
    @Query() query: PaginationDto,
  ): Promise<{ result: Book[]; total: number }> {
    const paginationDto = {
      page: query.page ? Number(query.page) : undefined,
      limit: query.limit ? Number(query.limit) : undefined,
    };
    let outResponse;
    try {
      let booksResponse = await this.bookService.findAll(paginationDto);
      outResponse = PaginateResponse(booksResponse, query.page, query.limit);
    } catch (e) {
      return e;
    }
    return outResponse;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Book> {
    let outResponse;
    try {
      let booksResponse = await this.bookService.findOne(id);
      outResponse = SuccessResponse({ data: booksResponse });
    } catch (e) {
      return e;
    }
    return outResponse;
  }

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    let outResponse;
    try {
      let booksResponse = await this.bookService.create(book);
      outResponse = SuccessResponse({
        data: booksResponse,
        statusCode: 201,
        message: 'The resource is created.',
      });
    } catch (e) {
      return e;
    }
    return outResponse;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() book: Book): Promise<Book> {
    let outResponse;
    try {
      let booksResponse = await this.bookService.update(id, book);
      outResponse = SuccessResponse({
        data: booksResponse,
        message: 'The resource is updated.',
      });
    } catch (e) {
      return e;
    }
    return outResponse;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    let outResponse;
    try {
      let booksResponse = await this.bookService.findOne(id);
      let message = 'The resource is not found.';
      if (booksResponse) {
        await this.bookService.remove(id);
        message = 'The resource is deleted.';
      }
      outResponse = SuccessResponse({
        data: booksResponse,
        message: message,
      });
    } catch (e) {
      return e;
    }
    return outResponse;
  }
}

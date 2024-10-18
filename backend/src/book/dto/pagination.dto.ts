// src/book/dto/pagination.dto.ts
import { IsInt, IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = 1; // Default page is 1

  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = 10; // Default limit is 10
}

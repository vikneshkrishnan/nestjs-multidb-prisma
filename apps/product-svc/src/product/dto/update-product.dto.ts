import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {

  @IsString()
  @IsEmpty()
  @ApiProperty()
  name:string

  @IsString()
  @IsEmpty()
  @ApiProperty()
  description:string

  @IsString()
  @IsEmpty()
  @ApiProperty()
  price:number
}

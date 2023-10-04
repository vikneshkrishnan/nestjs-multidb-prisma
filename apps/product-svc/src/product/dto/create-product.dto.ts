import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString } from 'class-validator';

export class CreateProductDto {

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

import {IsEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

  @IsString()
  @IsEmpty()
  @ApiProperty()
  name:string

  @IsString()
  @IsEmpty()
  @ApiProperty()
  email:string

  @IsString()
  @IsEmpty()
  @ApiProperty()
  password:string

}

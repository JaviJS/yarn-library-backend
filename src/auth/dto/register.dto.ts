import { IsDateString, IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator"
import { Transform } from "class-transformer";
export class RegisterDto {

  @IsString()
  @MinLength(1)   
  name: string;

  @IsEmail()  
  email: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @MinLength(8)   
  @MaxLength(15)
  password: string;

  @IsNumber()
  phone: number;

  @IsDateString()
  birthday: Date;

  @IsString()
  gender: string;

  @IsString()
  status: string;

  @IsString()
  country: string;

  @IsString()
  code_phone: string;
}

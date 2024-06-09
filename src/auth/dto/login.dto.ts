import { IsString, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class LoginDto {
  @IsString()
  username: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(8)
  @MaxLength(15)
  password: string;
}

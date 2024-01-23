import { IsNotEmpty, IsEmail, IsString, MaxLength, Length, IsNumber, IsInt, Min, MinLength, IsNumberString } from 'class-validator';

export class CreateCustomerDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  cpf: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
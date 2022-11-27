import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignupInput {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @MinLength(6)
  verifyPassword: string;

}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { SignupInput } from './dto/signup.input';
import { Token } from './models/token.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) { }

  @Post('sign-up')
  async signUp(@Body() data: SignupInput): Promise<Token> {
    data.email = data.email.toLowerCase();
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('sign-in')
  async login(@Body() { email, password }: LoginInput): Promise<Token> {
    const { accessToken, refreshToken } = await this.auth.login(
      email.toLowerCase(),
      password
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('refresh-token')
  async refreshToken(@Body() { token }: RefreshTokenInput): Promise<Token> {
    return this.auth.refreshToken(token);
  }

  @Get('user/:token')
  async user(@Param('token') token: string) {
    return await this.auth.getUserFromToken(token);
  }
}

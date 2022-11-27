import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from './password/password.service';
import { JwtService } from './jwt/jwt-strategy.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PasswordService, JwtService]
})
export class AuthModule { }

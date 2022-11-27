import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MeetupsModule } from './meetups/meetups.module';
import { AuthModule } from './auth/auth.module';
import { GameMatricesModule } from './game-matrices/game-matrices.module';
import config from './common/config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    PrismaModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    MeetupsModule,
    AuthModule,
    GameMatricesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

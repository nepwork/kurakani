import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MeetupsModule } from './meetups/meetups.module';
import { AuthModule } from './auth/auth.module';
import { GameMatricesModule } from './game-matrices/game-matrices.module';

@Module({
  imports: [UsersModule, MeetupsModule, AuthModule, GameMatricesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

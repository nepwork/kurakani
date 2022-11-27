import { Module } from '@nestjs/common';
import { GameMatricesService } from './game-matrices.service';
import { GameMatricesGateway } from './game-matrices.gateway';

@Module({
  providers: [GameMatricesGateway, GameMatricesService]
})
export class GameMatricesModule {}

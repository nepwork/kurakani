import { Test, TestingModule } from '@nestjs/testing';
import { GameMatricesGateway } from './game-matrices.gateway';
import { GameMatricesService } from './game-matrices.service';

describe('GameMatricesGateway', () => {
  let gateway: GameMatricesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameMatricesGateway, GameMatricesService],
    }).compile();

    gateway = module.get<GameMatricesGateway>(GameMatricesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

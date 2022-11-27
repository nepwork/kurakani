import { Test, TestingModule } from '@nestjs/testing';
import { GameMatricesService } from './game-matrices.service';

describe('GameMatricesService', () => {
  let service: GameMatricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameMatricesService],
    }).compile();

    service = module.get<GameMatricesService>(GameMatricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

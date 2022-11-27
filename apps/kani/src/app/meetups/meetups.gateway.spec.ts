import { Test, TestingModule } from '@nestjs/testing';
import { MeetupsGateway } from './meetups.gateway';
import { MeetupsService } from './meetups.service';

describe('MeetupsGateway', () => {
  let gateway: MeetupsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetupsGateway, MeetupsService],
    }).compile();

    gateway = module.get<MeetupsGateway>(MeetupsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

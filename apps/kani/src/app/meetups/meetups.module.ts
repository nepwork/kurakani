import { Module } from '@nestjs/common';
import { MeetupsService } from './meetups.service';
import { MeetupsGateway } from './meetups.gateway';
import { MeetupsController } from './meetups.controller';

@Module({
  providers: [MeetupsGateway, MeetupsService],
  controllers: [MeetupsController]
})
export class MeetupsModule {}

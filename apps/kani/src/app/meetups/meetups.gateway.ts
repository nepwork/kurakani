import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { MeetupsService } from './meetups.service';
import { CreateMeetupDto } from './dto/create-meetup.dto';
import { UpdateMeetupDto } from './dto/update-meetup.dto';

@WebSocketGateway()
export class MeetupsGateway {
  constructor(private readonly meetupsService: MeetupsService) {}

  @SubscribeMessage('createMeetup')
  create(@MessageBody() createMeetupDto: CreateMeetupDto) {
    return this.meetupsService.create(createMeetupDto);
  }

  @SubscribeMessage('findAllMeetups')
  findAll() {
    return this.meetupsService.findAll();
  }

  @SubscribeMessage('findOneMeetup')
  findOne(@MessageBody() id: number) {
    return this.meetupsService.findOne(id);
  }

  @SubscribeMessage('updateMeetup')
  update(@MessageBody() updateMeetupDto: UpdateMeetupDto) {
    return this.meetupsService.update(updateMeetupDto.id, updateMeetupDto);
  }

  @SubscribeMessage('removeMeetup')
  remove(@MessageBody() id: number) {
    return this.meetupsService.remove(id);
  }
}

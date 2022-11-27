import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { GameMatricesService } from './game-matrices.service';
import { CreateGameMatrixDto } from './dto/create-game-matrix.dto';
import { UpdateGameMatrixDto } from './dto/update-game-matrix.dto';

@WebSocketGateway()
export class GameMatricesGateway {
  constructor(private readonly gameMatricesService: GameMatricesService) {}

  @SubscribeMessage('createGameMatrix')
  create(@MessageBody() createGameMatrixDto: CreateGameMatrixDto) {
    return this.gameMatricesService.create(createGameMatrixDto);
  }

  @SubscribeMessage('findAllGameMatrices')
  findAll() {
    return this.gameMatricesService.findAll();
  }

  @SubscribeMessage('findOneGameMatrix')
  findOne(@MessageBody() id: number) {
    return this.gameMatricesService.findOne(id);
  }

  @SubscribeMessage('updateGameMatrix')
  update(@MessageBody() updateGameMatrixDto: UpdateGameMatrixDto) {
    return this.gameMatricesService.update(updateGameMatrixDto.id, updateGameMatrixDto);
  }

  @SubscribeMessage('removeGameMatrix')
  remove(@MessageBody() id: number) {
    return this.gameMatricesService.remove(id);
  }
}

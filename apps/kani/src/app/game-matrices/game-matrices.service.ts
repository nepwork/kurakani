import { Injectable } from '@nestjs/common';
import { CreateGameMatrixDto } from './dto/create-game-matrix.dto';
import { UpdateGameMatrixDto } from './dto/update-game-matrix.dto';

@Injectable()
export class GameMatricesService {
  create(createGameMatrixDto: CreateGameMatrixDto) {
    return 'This action adds a new gameMatrix';
  }

  findAll() {
    return `This action returns all gameMatrices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameMatrix`;
  }

  update(id: number, updateGameMatrixDto: UpdateGameMatrixDto) {
    return `This action updates a #${id} gameMatrix`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameMatrix`;
  }
}

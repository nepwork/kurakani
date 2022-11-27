import { PartialType } from '@nestjs/mapped-types';
import { CreateGameMatrixDto } from './create-game-matrix.dto';

export class UpdateGameMatrixDto extends PartialType(CreateGameMatrixDto) {
  id: number;
}

import { Injectable } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';

@Injectable()
export class RecadoService {
  private lastId = 1;
  private recados: RecadoEntity[] = [
    {
      id: 1,
      texto: 'Este é um recado',
      de: 'João',
      para: 'Maria',
      lido: false,
      data: new Date(),
    }
  ];

  findAll() {
    return this.recados
  }

  findOne(id: string) {
    return this.recados.find(item => item.id === +id);
  }
}

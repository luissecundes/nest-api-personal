import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.module';
import { RecadoModule } from './recados/recado.module';
@Module({
  imports: [ConceitosManualModule, RecadoModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

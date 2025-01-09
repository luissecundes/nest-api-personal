import { Module } from "@nestjs/common";
import { RecadoController } from "./recado.controller";
import { RecadoService } from "./recado.service";

@Module({
  controllers: [RecadoController],
  providers: [RecadoService],
  exports: [RecadoService],
})
export class RecadoModule {}
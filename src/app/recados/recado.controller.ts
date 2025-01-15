import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RecadoService } from "./recado.service";

// CRUD
@Controller('recados')
export class RecadoController {
  constructor(private readonly recadoService: RecadoService) {}

  @Get()
  findAll() {
    return this.recadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadoService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.recadoService.create(body);
  }
}
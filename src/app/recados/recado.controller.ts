import { Controller, Get } from "@nestjs/common";
import { RecadoService } from "./recado.service";

// CRUD
@Controller('recados')
export class RecadoController {
  constructor(private readonly recadoService: RecadoService) {}

  @Get()
  findAll() {
    return this.recadoService.findAll();
  }

//   @Post()
//   create(@Body() body: any) {
//     return body;
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() body: any) {
//     return {
//       id,
//       ...body,
//     };
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return 'Conseguimos remover o item com ID: ' + id;
//   }
}
import { Controller, Get, Post } from "@nestjs/common";


@Controller('recados')
export class RecadoController { 
    @Get()
    getRecados() {
        return 'Recados';
    }

    @Post()
    create() {
        return `Essa rota cria recados`;
    }
}
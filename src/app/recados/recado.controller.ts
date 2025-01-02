import { Controller, Get } from "@nestjs/common";


@Controller('recados')
export class RecadoController { 
    @Get()
    getRecados() {
        return 'Recados';
    }
}
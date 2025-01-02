import { Body, Controller, Get, Post } from "@nestjs/common";


@Controller('recados')
export class RecadoController { 
    @Get()
    getRecados() {
        return 'Recados';
    }

    @Post()
    create(@Body() body: any) {
        return body;
    }
}
import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";

// CRUD
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

    @Patch(':id')
    update(@Param('id') id: string,  @Body() body: any) {
        return {
            id,
            ...body
        };
    }
}
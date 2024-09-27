import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [CategoriesModule, ProductsModule],
=======

@Module({
  imports: [],
>>>>>>> 3c8f49d (new project)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

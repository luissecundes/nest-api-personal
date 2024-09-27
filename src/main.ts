import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
=======

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
>>>>>>> 3c8f49d (new project)
  await app.listen(3000);
}
bootstrap();

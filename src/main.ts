import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { PrismaNotFoundExceptionFilter } from './customers/exeption-filters/prisma-not-found.exception-filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: 422,
  }))

  app.useGlobalFilters(new PrismaNotFoundExceptionFilter())

  const config = new DocumentBuilder()
    .setTitle('Facilita Jurídico API')
    .setDescription('Routes for visiting customers')
    .setVersion('1.0')
    .addTag('Customers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Nest Payments')
    .setDescription('An API for customers and payments with Stripe.')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      description:
        'An http bearer auth token is required for all secured routes. An ' +
        'auth grant can be obtained from `/user/login` and `/user/register`',
    })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

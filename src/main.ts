
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger;
  const port = process.env.PORT;

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
  
  logger.log(`servering listening on port${port}`);
}
bootstrap();

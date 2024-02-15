import { ValidationPipe, Logger} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const logger = new Logger()

  app.useGlobalPipes( new ValidationPipe({
    transform: true, 
    whitelist: true
  }));

  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.log (`Application is running on: http://localhost:${port}`)
}
bootstrap(); 
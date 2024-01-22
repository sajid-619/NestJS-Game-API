import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Use configuration service
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');

  await app.listen(port);
}
bootstrap();
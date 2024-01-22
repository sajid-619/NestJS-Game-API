// src/app.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoresModule } from './scores/scores.module';
import { AuthModule } from './auth/auth.module';
import { LoggerService } from './common/logger/logger.service';
import { LoggingMiddleware } from './common/middleware/logging.middleware';
import databaseConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseConfig().host,
      port: databaseConfig().port,
      username: databaseConfig().username,
      password: databaseConfig().password,
      database: databaseConfig().database,
      entities: databaseConfig().entities,
      synchronize: databaseConfig().synchronize,
    }),
    ScoresModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}

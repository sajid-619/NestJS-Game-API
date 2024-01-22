// src/scores/scores.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import { ScoresRepository } from './scores.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ScoresRepository])],
  controllers: [ScoresController],
  providers: [ScoresService],
})
export class ScoresModule {}

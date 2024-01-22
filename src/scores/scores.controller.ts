// src/scores/scores.controller.ts
import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  @UseGuards(AuthGuard)
  submitScore(@Body() createScoreDto: CreateScoreDto, @Req() request: any) {
    return this.scoresService.submitScore(createScoreDto);
  }

  @Get('leaderboard')
  getLeaderboard() {
    return this.scoresService.getTopScores(10);
  }
}

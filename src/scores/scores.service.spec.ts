// src/scores/scores.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScoresRepository } from './scores.repository';
import { Score } from './scores.entity';
import { CreateScoreDto } from './dto/create-score.dto';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(ScoresRepository)
    private readonly scoresRepository: ScoresRepository,
  ) {}

  async getTopScores(limit: number): Promise<Score[]> {
    return this.scoresRepository.getTopScores(limit);
  }

  async submitScore(createScoreDto: CreateScoreDto, userId: number): Promise<Score> {
    const { score } = createScoreDto;

    // Check if the user exists
    const userExists = await this.scoresRepository.checkIfUserExists(userId);
    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    // Create a new score entity
    const newScore = this.scoresRepository.create({
      userId,
      score,
    });

    // Save the score to the database
    return this.scoresRepository.save(newScore);
  }
}

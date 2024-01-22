// src/scores/scores.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Score } from './scores.entity';

@EntityRepository(Score)
export class ScoresRepository extends Repository<Score> {
  checkIfUserExists: any;
  // Add custom repository methods if needed

  async getTopScores(limit: number): Promise<Score[]> {
    return this.createQueryBuilder('score')
      .orderBy('score.score', 'DESC')
      .limit(limit)
      .getMany();
  }
}

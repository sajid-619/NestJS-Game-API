// src/scores/scores.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScoresRepository } from './scores.repository';
import { Score } from './scores.entity';
import { CreateScoreDto } from './dto/create-score.dto';
import { UserService } from 'src/users/user.service';

@Injectable()
export class ScoresService {
    constructor(
        @InjectRepository(ScoresRepository)
        private readonly scoresRepository: ScoresRepository,
        private readonly userService: UserService,
    ) { }

    async getTopScores(limit: number): Promise<Score[]> {
        return this.scoresRepository.getTopScores(limit);
    }

    async submitScore(createScoreDto: CreateScoreDto): Promise<Score> {
        const { userId, score } = createScoreDto;

        // Check if the user exists
        const userExists = await this.checkIfUserExists(userId);
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

    private async checkIfUserExists(userId: number): Promise<boolean> {
        try {
            // Replace this with your actual logic to check if the user exists
            const user = await this.userService.findUserById(userId);
            return !!user; // Return true if user exists, false otherwise
        } catch (error) {
            return false; // Handle errors or return false in case of an error
        }
    }
}


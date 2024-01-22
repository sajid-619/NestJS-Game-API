import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  score: number;
    user: any;
}
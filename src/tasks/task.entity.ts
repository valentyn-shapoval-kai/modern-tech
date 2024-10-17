// src/tasks/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'date', nullable: true })
  dueDate: string;

  @Column({ default: 'Не виконано' })
  status: string;

  @Column({ default: 'Середній' })
  priority: string;

  @ManyToOne(() => User, user => user.id)
  user: User;
}

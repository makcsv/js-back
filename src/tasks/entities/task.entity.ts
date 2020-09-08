import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    title: string;

    @Column({ default: false })
    isComplete: boolean;
}
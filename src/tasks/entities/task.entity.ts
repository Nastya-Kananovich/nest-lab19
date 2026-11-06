import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity'; // <-- èìïîðò

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ default: false })
    completed: boolean;

    // ÄÎÁÀÂËßÅÌ ÝÒÎ:
    @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
    user: User;
}
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Workspace } from '../../workspace/entities/workspace.entity';

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 255 })
    location: string;

    @Column()
    number_workspaces: number;

    @OneToMany(() => Workspace, workspace => workspace.room)
    workspaces: Workspace[];
}

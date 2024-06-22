import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../../user/entities/user.entity';
import { Workspace } from '../../workspace/entities/workspace.entity';
import { Session } from '../../session/entities/session.entity';

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    reservation_date: Date;

    @Column({ type: 'timestamp' })
    start_time: Date;

    @Column({ type: 'timestamp' })
    end_time: Date;

    @ManyToOne(() => Users, user => user.reservations)
    @JoinColumn({ name: 'user_id' })
    user: Users;

    @ManyToOne(() => Workspace, workspace => workspace.reservations)
    @JoinColumn({ name: 'workspace_id' })
    workspace: Workspace;

    @ManyToOne(() => Session, session => session.reservations)
    @JoinColumn({ name: 'session_id' })
    session: Session;
}

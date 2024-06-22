import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import {Room} from '../../room/entities/room.entity'
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Entity('workspace')
export class Workspace {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name?: string;
  
    @Column()
    columns: string;
  
    @Column()
    rows: string;

    @Column()   
    rooms_id: number;
  
    @ManyToOne(() => Room, room => room.workspaces)
    @JoinColumn({name: 'rooms_id'})
    room: Room;
  
    @OneToMany(() => Reservation, reservation => reservation.workspace)
    reservations: Reservation[]
    // @ManyToOne(() => Espacio, espacio => espacio.reservas)
    // @JoinColumn({name: 'id_espacio'})
    // espacio: Espacio;


}



import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from '../../reservation/entities/reservation.entity'

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  description: string;

  @OneToMany(() => Reservation, reservation => reservation.session)
  reservations: Reservation[];
}


import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from '../../reservation/entities/reservation.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email?: string;

  @Column()
  created_at: Date;

  @OneToMany(() => Reservation, reservation => reservation.user)
  reservations: Reservation[];
}

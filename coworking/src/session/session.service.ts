import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ){}

  async getMoreOcupade(){
    const sessions = await this.sessionRepository
        .createQueryBuilder('s')
        .innerJoin('s.reservations', 'r')
        .select([
            's.id',
            's.name',
            'COUNT(s.id) AS quantity',
        ])
        .groupBy('s.id')
        .orderBy('quantity', 'DESC')
        .getRawMany();

        return sessions
  }

  async getMoreAvailable(){
    const sessions = await this.sessionRepository
        .createQueryBuilder('s')
        .innerJoin('s.reservations', 'r')
        .select([
            's.id',
            's.name',
            'COUNT(s.id) AS quantity',
        ])
        .groupBy('s.id')
        .orderBy('quantity', 'ASC')
        .getRawMany();

        return sessions
  }
  create(createSessionDto: CreateSessionDto) {
    return 'This action adds a new session';
  }

  findAll() {
    return `This action returns all session`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }


 
}

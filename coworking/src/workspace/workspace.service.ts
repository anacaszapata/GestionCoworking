import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Workspace } from './entities/workspace.entity'
import { Repository } from 'typeorm';


export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace)
    private readonly workspaceRepository: Repository<Workspace>
  ) { }

  create(createWorkspaceDto: CreateWorkspaceDto) {
    return 'This action adds a new workspace';
  }

  async findAll() {
    return await this.workspaceRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} workspace`;
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return `This action updates a #${id} workspace`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }

  async getAvailableWithSession(session_id: string, room_id: string) {
    const workspaces = await this.workspaceRepository.
      createQueryBuilder('w')
      .leftJoinAndSelect('w.reservations', 'r')
      .leftJoinAndSelect("r.session", "s")
      .where("w.rooms_id = :room_id", { room_id })
      .andWhere("s.id = :session_id", { session_id })
      .andWhere("r.workspace IS NULL")
      .getMany();


    return workspaces
  }
  async getDisableWithSession(session_id: string, room_id: string) {
    const workspaces = await this.workspaceRepository.
      createQueryBuilder('w')
      .leftJoinAndSelect('w.reservations', 'r')
      .leftJoinAndSelect("r.session", "s")
      .where("w.rooms_id = :room_id", { room_id })
      .andWhere("s.id = :session_id", { session_id })
      .getMany();

    return workspaces
  }

  async getWorkspacesByUserId(user_id: string) {
    const workspaces = await this.workspaceRepository
      .createQueryBuilder('w')
      .innerJoin('w.reservations', 'r')
      .select(['w.id', 'w.name'])
      .where('r.user_id = :user_id', { user_id })
      .getMany();

    return workspaces;
  }


  async getWorkspacesBySession(session_id: string) {
    const workspaces = await this.workspaceRepository
      .createQueryBuilder('w')
      .innerJoin('w.reservations', 'r')
      .select(['w.id', 'w.name'])
      .where('r.session = :session_id', { session_id })
      .getMany();

    return workspaces;
  }
}

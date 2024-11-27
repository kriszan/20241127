import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class TeamService {
  async create(createTeamDto: CreateTeamDto) {
    try {
      return await prisma.team.create({
        data: {...createTeamDto}
      })
    }
    catch {
      return {status: 500}
    }
  }

  async findAll() {
    try {
      return await prisma.team.findMany();
    }
    catch {
      return {status: 500}
    }
  }

  async findOne(id: number) {
    try {
      return await prisma.team.findUnique({where: {id: id}});
    }
    catch {
      return {status: 500}
    }
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    try {
      return await prisma.team.update({where: {id: id}, data: { ...updateTeamDto }});
    }
    catch {
      return {status: 500}
    }
  }

  async remove(id: number) {
    try {
      return await prisma.team.delete({where: {id: id}})
    }
    catch {
      return {status: 500}
    }
  }
}

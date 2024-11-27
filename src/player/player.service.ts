import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class PlayerService {

  async create(createPlayerDto: CreatePlayerDto) {
    try {
      return await prisma.player.create({
        data: { ...createPlayerDto }
      })
    }
    catch {
      return {status: 500}
    }
  }

  async findAll() {
    try {
      return await prisma.player.findMany();
    }
    catch {
      return {status: 500}
    }
  }

  async findOne(id: number) {
    try {
      return await prisma.player.findUnique({where: {id: id}});
    }
    catch {
      return {status: 500}
    }
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    try {
      return await prisma.player.update({where: {id: id}, data: { ...updatePlayerDto }});
    }
    catch {
      return {status: 500}
    }
  }

  async remove(id: number) {
    try {
      return await prisma.player.delete({where: {id: id}})
    }
    catch {
      return {status: 500}
    }
  }
}

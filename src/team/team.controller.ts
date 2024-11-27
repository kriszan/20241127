import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';

import { UpdatePlayerDto } from 'src/player/dto/update-player.dto';
import { Response } from 'express';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createPlayerDto: CreateTeamDto, @Res() response: Response) {
    return this.teamService.create(createPlayerDto)
      .then(x => !x ? response.status(HttpStatus.NOT_FOUND).send({ message: "Server Error at create" }) : response.status(HttpStatus.OK).send())
      .catch(err => { console.log(err); return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Server Error at create' }); });
  }

  @Get()
  findAll( @Res() response: Response) {
    return this.teamService.findAll()
    .then(x => !x ? response.status(HttpStatus.NOT_FOUND).send({ message: "Server Error at findAll" }) : response.status(HttpStatus.OK).send(x))
    .catch(err => { console.log(err); return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Server Error at findAll' }); });
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() response: Response) {
    return this.teamService.findOne(+id)
    .then(x => !x ? response.status(HttpStatus.NOT_FOUND).send({ message: "Server Error at findOne" }) : response.status(HttpStatus.OK).send(x))
    .catch(err => { console.log(err); return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Server Error at findOne' }); })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto, @Res() response: Response) {
    return this.teamService.update(+id, updatePlayerDto)
    .then(x => !x ? response.status(HttpStatus.NOT_FOUND).send({ message: "Server Error at update" }) : response.status(HttpStatus.OK).send())
    .catch(err => { console.log(err); return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Server Error at update' }); })
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    return this.teamService.remove(+id)
    .then(x => !x ? response.status(HttpStatus.NOT_FOUND).send({ message: "Server Error at delete" }) : response.status(HttpStatus.OK).send())
    .catch(err => { console.log(err); return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Server Error at delete' }); })
  }
}

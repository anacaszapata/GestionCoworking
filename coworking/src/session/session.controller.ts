import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';  // Asegúrate de tener la entidad Session definida

@ApiTags('session')
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @ApiOperation({ summary: 'Get the most occupied session' })
  @ApiResponse({ status: 200, description: 'Return the most occupied session.' })
  @Get('more-ocupade')
  getMoreOcupade() {
    return this.sessionService.getMoreOcupade();
  }

  @ApiOperation({ summary: 'Get the most available session' })
  @ApiResponse({ status: 200, description: 'Return the most available session.' })
  @Get('more-available')
  getMoreAvailable() {
    return this.sessionService.getMoreAvailable();
  }

  @ApiOperation({ summary: 'Get all sessions' })
  @ApiResponse({ status: 200, description: 'Return all sessions.', type: [Session] })
  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @ApiOperation({ summary: 'Get a session by id' })
  @ApiResponse({ status: 200, description: 'Return the session by id.', type: Session })
  @ApiResponse({ status: 404, description: 'Session not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionService.findOne(+id);
  }
}

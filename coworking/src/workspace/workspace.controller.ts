import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';

@ApiTags('workspace')
@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}


 

  @ApiOperation({ summary: 'Get all workspaces' })
  @ApiResponse({ status: 200, description: 'Return all workspaces.', type: [Workspace] })
  @Get()
  findAll() {
    return this.workspaceService.findAll();
  }

  @ApiOperation({ summary: 'Get a workspace by id' })
  @ApiResponse({ status: 200, description: 'Return the workspace by id.', type: Workspace })
  @ApiResponse({ status: 404, description: 'Workspace not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workspaceService.findOne(+id);
  }

  @ApiOperation({ summary: 'Get available workspaces with a specific session and room' })
  @ApiResponse({ status: 200, description: 'Return available workspaces for the session and room.' })
  @Get('available/session/:session_id/:room_id')
  getAvailableWithSession(
    @Param('session_id') session_id: string,
    @Param('room_id') room_id: string
  ) {
    return this.workspaceService.getAvailableWithSession(session_id, room_id);
  }

  @ApiOperation({ summary: 'Get disabled workspaces with a specific session and room' })
  @ApiResponse({ status: 200, description: 'Return disabled workspaces for the session and room.' })
  @Get('disable/session/:session_id/:room_id')
  getDisableWithSession(
    @Param('session_id') session_id: string,
    @Param('room_id') room_id: string
  ) {
    return this.workspaceService.getDisableWithSession(session_id, room_id);
  }

  @ApiOperation({ summary: 'Get workspaces by user id' })
  @ApiResponse({ status: 200, description: 'Return workspaces for the user id.', type: [Workspace] })
  @Get('/by_user/:user_id')
  getWorkspacesByUserId(
    @Param('user_id') user_id: string,
  ) {
    return this.workspaceService.getWorkspacesByUserId(user_id);
  }

  @ApiOperation({ summary: 'Get workspaces by session id' })
  @ApiResponse({ status: 200, description: 'Return workspaces for the session id.', type: [Workspace] })
  @Get('/by_session/:session_id')
  getWorkspacesBySession(
    @Param('session_id') session_id: string,
  ) {
    return this.workspaceService.getWorkspacesBySession(session_id);
  }
}

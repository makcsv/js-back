import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import { Request } from 'express';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Post(':id')
  setStatus(@Param('id') id: string, @Body() {isComplete}) {
    this.tasksService.setStatus(Number(id), Boolean(isComplete));

    return JSON.stringify({status: 'ok'});
  }

  // @Post('add')
  // create(@Req() request: Request) {
  //   return 'new task added ' + request.query;
  // }
}

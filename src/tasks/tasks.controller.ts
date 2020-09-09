import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {
    }

    @Get()
    getAll() {
        return this.tasksService.getAll();
    }

    @Post('create')
    create(@Body() {title}) {
        return this.tasksService.createNew(title);
    }

    @Post('update/:id')
    setStatus(@Param('id') id: string, @Body() {isComplete}) {
        return this.tasksService.setStatus(Number(id), Boolean(isComplete));
    }

    @Delete('delete/:id')
    delete(@Param('id') id: string) {
        return this.tasksService.delete(Number(id));
    }
}

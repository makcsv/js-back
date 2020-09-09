import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) {}

    getAll() {
        return this.tasksRepository.find();
    }

    async setStatus(id, status) {
        const task = await this.tasksRepository.findOne(id);

        if (task) {
            task.isComplete = status;

            try {
                await this.tasksRepository.save(task);
            } catch (e) {
                return {status: 'error'};
            }

            return {status: 'ok'};
        }

        return {status: 'error'};
    }

    async createNew(title) {
        const task = new Task();

        task.title = title;

        try {
            await this.tasksRepository.save(task);
        } catch (e) {
            return {status: 'error'};
        }

        return {status: 'ok'};
    }

    async delete(id) {
        try {
            await this.tasksRepository.delete({id: id});
        } catch (e) {
            return {status: 'error'};
        }

        return {status: 'ok'};
    }
}
